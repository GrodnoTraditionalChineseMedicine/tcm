const express = require('express');
const learntcmRouter = express.Router();
const getAllArticlesObject = require('../jsonObject/getArticles');
//const article = require('../jsonObject/article');
const dbTool = require('../dao/databaseConnection');
const getAllArticlesSql = require('../dao/getAllArticlesSql');
const getAllArticlesByMenusCodeSql = require('../dao/getAllArticlesByMenusCodeSql');
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
            }
            else{
                getAllArticlesObject.success = true;
                getAllArticlesObject.data.code = 200;
                const articles = [];
                for(var i = 0; i < result.length; i++) {
                    var article = {
                        "articleId": "",
                        "articleTitle": "",
                        "articleRow": "",
                        "publishTime": ""
                    }
                    article.articleId = result[i].article_id;
                    article.articleRow = result[i].article_raw;
                    article.articleTitle = result[i].article_title;
                    //将datetime转化成date形式的字符串
                    const published_date = new Date(result[i].published_time.toString());
                    article.publishTime = published_date.getFullYear() + '-' + published_date.getMonth() + '-' + published_date.getDate();
                    articles.push(article);
                }
                getAllArticlesObject.data.article = articles;
                res.json(getAllArticlesObject);
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
            }
            else{
                getAllArticlesObject.success = true;
                getAllArticlesObject.data.code = 200;
                const articles = [];
                for(var i = 0; i < result.length; i++) {
                    var article = {
                        "articleId": "",
                        "articleTitle": "",
                        "articleRow": "",
                        "publishTime": ""
                    }
                    article.articleId = result[i].article_id;
                    article.articleRow = result[i].article_raw;
                    article.articleTitle = result[i].article_title;
                    //将datetime转化成date形式的字符串
                    const published_date = new Date(result[i].published_time.toString());
                    article.publishTime = published_date.getFullYear() + '-' + published_date.getMonth() + '-' + published_date.getDate();
                    articles.push(article);
                }
                getAllArticlesObject.data.article = articles;
                res.json(getAllArticlesObject);
            }
        });
    }
});



module.exports = learntcmRouter;
