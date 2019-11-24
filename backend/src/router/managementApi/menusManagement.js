const express = require('express');
const menusManagementRouter = express.Router();
const menusManagementSql = require('../../dao/mensuManagementsSql');
const dbTool = require('../../dao/databaseConnection');
const requestHelper = require('request-promise');
const options = {
    method: 'GET',
    url: 'http://localhost:3001/api/learntcm/menus',
    json: true
};
// const optionsOfPost = {
//   method : 'POST',
//     url  : 'http://localhost:3001/api/manage/containers/content/delete',
//     json : true,
//     headers : {
//         "content-type": "application/json",
//     },
//     body: {"menuCode" : ''}
// };
menusManagementRouter.post('/add', (req,res)=>{
    let menu = {
        "menuCode": "002",
        "menuName": "诊断方法",
        "parentCode" : "",
        "level": "2",
        "imgUrl": "https://i.loli.net/2019/11/16/rUzXQ7VEOMdH6af.jpg",
        "isShow": 1,
        "isModify" : 0
    };
    console.log(req.query + "  " + req.body );
    if(req.body.name !== undefined && req.body.residence !== undefined){
        menu.menuName = req.body.name;
        menu.parentCode = req.body.residence;
        if(req.body.imgUrl === undefined){
            menu.imgUrl = null;
        }
        else{
            menu.imgUrl = req.body.imgUrl;
        }
        menu.isModify = 0;
        menu.isShow = 1;
        menu.level = (menu.parentCode.length / 3) + 1;
        if(menu.parentCode !== undefined){
            dbTool.query(menusManagementSql.getSubMenusByParentCode, menu.parentCode, (err, result)=>{
                console.log(result[0].menu_code);
                let generateMenuCodeByDefault = "001";
                if(result[0].menu_code !== null){
                    let maximumSubMenuCode = result[0].menu_code;
                    let subMenuCode = maximumSubMenuCode.substr(maximumSubMenuCode.length - 3, 3);
                    let codeWithoutZero = (parseInt(subMenuCode) + 1).toString();
                    console.log(subMenuCode + "   " + codeWithoutZero);
                    switch (codeWithoutZero.length) {
                        case 1: generateMenuCodeByDefault = '00' + codeWithoutZero;
                            break;
                        case 2: generateMenuCodeByDefault = '0' + codeWithoutZero;
                            break;
                        case 3: generateMenuCodeByDefault = codeWithoutZero;
                            break;
                        default:
                            break;
                    }
                }
                if(menu.parentCode === "000"){
                    menu.menuCode = generateMenuCodeByDefault;
                }
                else{
                    menu.menuCode = menu.parentCode + generateMenuCodeByDefault
                }
                dbTool.query(menusManagementSql["insertRecord "], [menu.menuCode, menu.menuName, menu.parentCode, menu.level, menu.isShow, menu.isModify, menu.imgUrl],(err)=>{
                    if(err){
                        console.log('insert failed!! /n err info: ' + err.toString());
                    }
                    else{
                        //make request to getmenus api to get all menus
                        requestHelper(options)
                            .then(function (response) {
                                // Request was successful, use the response object at will
                                const newMenus = response.data.menus;
                                const jsonObejct = {
                                    "success" : true,
                                    "data" : {
                                        "code" : 200,
                                        "message" : "新增成功！！！",
                                        "content" : []
                                    }
                                };
                                jsonObejct.data.content = newMenus;
                                res.json(jsonObejct);
                            })
                            .catch(function (err) {
                                // Something bad happened, handle the error
                            });
                    }
                })
            });
        }
    }
    else{
        res.json({"message": "参数不合法！！请求失败！！"});
        res.end();
    }



});
menusManagementRouter.post('/delete', (req, res)=>{
    const code = req.body.menuCode;
    console.log(req.body);
    let jsonObject = {
        "success" : false,
        "data" : {
            "code" : 400,
            "message" : "错误！没有menuCode!!!",
            "content" : []
        }
    };
    if(code === undefined){
      res.json(jsonObject);
      res.end();
    }
    else{
        dbTool.query(menusManagementSql.deleteRecordByMenuCode, ("^" + code), (err)=>{
            if(err){
                res.json({
                    "message" : "database updated failed!!",
                    "err info" : err.toString()
                });
                res.end();
            }
            else{
                jsonObject.success = true;
                jsonObject.data.code = 200;
                jsonObject.data.message = "删除成功！！！";
                requestHelper(options)
                    .then(function (response) {
                        // Request was successful, use the response object at will
                        jsonObject.data.content = response.data.menus;
                        res.json(jsonObject);
                        res.end();
                    })
                    .catch(function (err) {
                        // Something bad happened, handle the error
                    });
            }

        });
    }
});
menusManagementRouter.post('/show', (req, res)=>{
    let jsonObject = {
        "success" : false,
        "data" :{
            "code" : 400,
            "message" : "更改isShow失败！！！",
            "content" :[],
        }
    };
    const isShow = req.body.isShow;
    const menuCode = req.body.menuCode;
    let code = 0;
    if(isShow === undefined || menuCode === undefined){
        jsonObject.data.message = "参数不齐全！！！";
        res.json(jsonObject);
        res.end();
    }
    else{
        if(isShow === true){
            code = 1;
        }
        dbTool.query(menusManagementSql.updateFiledIsShow, [code,"^" + menuCode], (err)=>{
           if(err){
               res.json({
                   "database update failed!!" : err.toString(),
               });
               res.status(400).end();
           }
           else{
               requestHelper(options)
                   .then(function (response) {
                       // Request was successful, use the response object at will
                       if(response.success === true){
                           jsonObject.success = true;
                           jsonObject.data = response.data;
                       }
                       res.json(jsonObject);
                       res.end();
                   })
                   .catch(function (err) {
                       // Something bad happened, handle the error
                       res.json({
                           "err occured! err info" : err.toString(),
                       });
                       res.end();
                   });
           }
        });

    }
});


module.exports = menusManagementRouter;
