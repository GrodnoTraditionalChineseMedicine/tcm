const express = require('express');
const menusRouter = express.Router();
const sqlJson = require('../dao/menusSql');
const dbTool = require('../dao/databaseConnection');
const menusObject = require('../jsonObject/meunsApi');
function treeData(cloneData){
    console.log('data:'+ cloneData);
    return cloneData.filter(father=>{
        let branchArr = cloneData.filter(child=>father.menuCode == child.parentCode);   //返回每一项的子级数组
        branchArr.length>0 ? father.submenu = branchArr : '';  //如果存在子级，则给父级添加一个children属性，并赋值
        return father.parentCode=='000';      //返回第一层
    });
}
menusRouter.get('/', (req, res)=>{
    let success,code ;
    let sql = sqlJson.getAllmenus;
    // console.log(req.query.all)
    if(req.query.all === "true"){
        sql = sqlJson.getAllMenusNoMatterIsShow;
    }
    // console.log(sql);
    dbTool.query(sql, (err,result, next)=>{
        if(err){
            console.log('Database query failed!!!'+ "/n err info:" + err.toString());
            success = false;
            code = 400;
        }
        else{
            success = true;
            code = 200;
            const menus = [];
            for(var i = 0; i < result.length; i++) {
                var menusWithImg = {
                    "menuCode": "002",
                        "menuName": "诊断方法",
                        "parentCode" : "",
                        "level": "2",
                        "imgUrl": "https://i.loli.net/2019/11/16/rUzXQ7VEOMdH6af.jpg",
                        "isShow": 1,
                        "isModify" : 0
                };
                var menusWithoutImg = {
                    "menuCode": "002",
                    "menuName": "诊断方法",
                    "parentCode" : "",
                    "level": "2",
                    "isShow": 1,
                    "isModify" : 0
                };
                if(result[i].imgUrl === undefined){
                    menusWithoutImg.menuCode = result[i].menu_code;
                    menusWithoutImg.menuName = result[i].menu_name;
                    menusWithoutImg.level = result[i].level;
                    menusWithoutImg.isShow = result[i].is_show;
                    menusWithoutImg.isModify = result[i].is_modify;
                    menusWithoutImg.parentCode = result[i].parent_code;
                    menus.push(menusWithoutImg);
                }
                else {
                    menusWithImg.menuCode = result[i].menu_code;
                    menusWithImg.menuName = result[i].menu_name;
                    menusWithImg.level = result[i].level;
                    menusWithImg.isShow = result[i].is_show;
                    menusWithImg.isModify = result[i].is_modify;
                    menusWithImg.parentCode = result[i].parent_code;
                    menusWithImg.imgUrl = result[i].imgUrl;
                    menus.push(menusWithImg);
                }
            }
            //console.log(menus);
            var data = [];
            data = treeData(menus);
            menusObject.success = true;
            menusObject.data.code = 200;
            menusObject.data.menus = menus;
            res.json(menusObject);
            res.end();
        }
    });
});

module.exports = menusRouter;
