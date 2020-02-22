const express = require('express');
const learntcmRouter = express.Router();
const formatter = require('../tools/timeFormat.js');
const getAllArticlesObject = require('../jsonObject/getArticles');
function clearCache(object) {
    object.success =  false;
    object.data.code = 400;
    object.data.articles = [];
}
//const article = require('../jsonObject/article');
const dbTool = require('../dao/databaseConnection');
const getAllArticlesSql = require('../dao/getAllArticlesSql');
const getAllArticlesByMenusCodeSql = require('../dao/getAllArticlesByMenusCodeSql');
const CurrentImgUrl = require('../dao/menusSql');
const menusRouter = require('./menus');
learntcmRouter.use('/menus', menusRouter);
learntcmRouter.get('/menus/articles',(req,res)=>{
    const menusCode = req.query.code;
    if(menusCode === undefined){
        dbTool.query(getAllArticlesSql.sql, (err,result)=>{
            if(err){
                console.log('Database query failed!!!'+ "/n err info:" + err.toString());
                getAllArticlesObject.success = false;
                getAllArticlesObject.data.code = 400;
                getAllArticlesObject.data.article = [];
                res.json(getAllArticlesObject);
                clearCache(getAllArticlesObject);
                return 1;
            }
            else{
                getAllArticlesObject.success = true;
                getAllArticlesObject.data.code = 200;
                const articles = [];
                for(var i = 0; i < result.length; i++) {
                    var article = {
                        "articleId": "",
                        "articleTitle": "",
                        "imgUrl": "",
                        "publishTime": ""
                    };
                    article.articleId = result[i].article_id;
                    article.imgUrl = result[i].imgUrl;
                    article.articleTitle = result[i].article_title;
                    //将datetime转化成date形式的字符串
                    // const published_date = new Date(result[i].published_time.toString());
                    // article.publishTime = published_date.getFullYear() + '-' + published_date.getMonth() + '-' + published_date.getDate();
                    article.publishTime = formatter(result[i].published_time.toString(), false);
                    articles.push(article);
                }
                getAllArticlesObject.data.article = articles;
                res.json(getAllArticlesObject);
                clearCache(getAllArticlesObject);
                return 1;
            }
        });
    }
    else{
        dbTool.query(getAllArticlesByMenusCodeSql.sql,menusCode, (err,result)=>{
            if(err){
                console.log('Database query failed!!!'+ "/n err info:" + err.toString());
                getAllArticlesObject.success = false;
                getAllArticlesObject.data.code = 400;
                getAllArticlesObject.data.article = [];
                res.json(getAllArticlesObject);
                clearCache(getAllArticlesObject);
                return 1;
            }
            else{
                getAllArticlesObject.success = true;
                getAllArticlesObject.data.code = 200;
                const articles = [];
                for(let i = 0; i < result.length; i++) {
                    let article = {
                        "articleId": "",
                        "articleTitle": "",
                        "imgUrl": "",
                        "publishTime": ""
                    }
                    article.articleId = result[i].article_id;
                    article.imgUrl = result[i].imgUrl;
                    article.articleTitle = result[i].article_title;
                    //将datetime转化成date形式的字符串
                    // const published_date = new Date(result[i].published_time.toString());
                    // article.publishTime = published_date.getFullYear() + '-' + published_date.getMonth() + '-' + published_date.getDate();
                    article.publishTime = formatter(result[i].published_time.toString(), false);
                    articles.push(article);
                }
                getAllArticlesObject.data.article = articles;
                res.json(getAllArticlesObject);
                clearCache(getAllArticlesObject);
                return 1;
            }
        });
    }
});
learntcmRouter.post('/current', (req, res)=>{
    const CurrentImgUrlSql = CurrentImgUrl.getCurrentImgUrl;
    const menuCode = req.body.code;
    dbTool.query(CurrentImgUrlSql, (err, reslut)=>{
        if(err || menuCode === undefined){

        }
        else{
            let res = [];
            for(let i = 0; i < reslut.length; i++){
                let object = {
                    "menuCode" : '',
                    "imgUrl" : '',
                };
                object.menuCode = reslut[i].menu_code;
                object.imgUrl = reslut[i].imgUrl;
                res.push(object);
            }

            let tep = menuCode;
            let i = 0;
            while(tep !== ''){
                if(res[i].menuCode = tep)1
            }
        }
    })
});



module.exports = learntcmRouter;
