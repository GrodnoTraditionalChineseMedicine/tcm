const express = require('express');
const router = express.Router();
const dbTool = require('../../dao/databaseConnection');
const managementSql = require('../../dao/momentsManagementSql');
function parametersInvalid(res){
    resObject.data.message = "Parameters are not valid!!1";
    res.json(resObject);
    res.status(400).end();
}
let resObject = {
    "success" : false,
    "data" : {
        "code" : 400,
        "message" : "",
        "moments" : []
    }
};
router.get('/', (req, res)=>{
    let getMomentsSql = managementSql.getAllRecords;
    dbTool.query(getMomentsSql, (err, result )=>{
        if(err){
            resObject.data.message = err.toString();
            res.json(resObject);
            res.status(400).end();
        }
        else{
            let employees = [];
            for(let i = 0; i < result.length; i++){
                let object = {
                    employeeId: null,
                    roleId: null,
                    roleName: null,
                    avatarUrl: null,
                    name: null,
                    sex: null,
                    phoneNum: null,
                    birthday: null,
                    address: null,
                    employeeDescription: null
                };
                object.employeeId = result[i].employee_id;
                object.roleId = result[i].role_id;
                object.roleName = result[i].role_name;
                object.avatarUrl = result[i].avatar_url;
                object.name = result[i].name;
                object.sex = result[i].sex;
                object.phoneNum = result[i].phone_num;
                object.birthday = result[i].date_of_birth;
                object.address = result[i].address;
                object.employeeDescription = result[i].employee_description;
                employees.push(object);
            }
            resObject.success = true;
            resObject.data.code = 200;
            resObject.data.message = "Successfully get all records!!";
            resObject.data.staff = employees;
            res.json(resObject);
            res.end();
        }
    });
});
router.post('/add',(req,res)=>{
    let object = {
        "momentId" : -1,
        "momentTitle":req.body.momentTitle,
        "momentContent":req.body.momentContent,
        "publishedTime":new Date(),
        "isShow":req.body.isShow,
        "images":req.body.images
    };
    dbTool.query(managementSql.addRecord, [object.momentTitle, object.momentContent, object.publishedTime, object.isShow], (err)=>{
        if(err){
            console.log(err);
            resObject.data.message = "Failed when insert record into moment table!! err info:" + err.toString();
            res.json(resObject);
            res.status(400).end();
        }
        else{
            dbTool.query(managementSql.getMaxId, (err, result)=>{
                if(err){
                    resObject.data.message = "Failed when get max file id from file table!! err info:" + err.toString();
                    res.json(resObject);
                    res.status(400).end();
                }
                else{
                    object.momentId = result[0].moment_id;
                    dbTool.query(managementSql.getRoleName, object.roleId, (err, result)=>{
                        if(err){
                            resObject.data.message = "Failed when get role name from role table!! err info:" + err.toString();
                            res.json(resObject);
                            res.status(400).end();
                        }
                        else{
                            object.roleName = result[0].role_name;
                            resObject.success = true;
                            resObject.data.code = 200;
                            resObject.data.message = "Insert records into employee table succeed!!";
                            resObject.data.staff = object;
                            res.json(resObject);
                            res.end();
                        }
                    });
                }
            });
        }
    });
});
router.post('/delete', (req, res)=>{
    const employeeId = req.body.employeeId;
    if(employeeId !== undefined){
        dbTool.query(managementSql.deleteRecord, employeeId, (err)=>{
            if(err){
                resObject.data.message = "Failed when delete record from employee table!! err info:" + err.toString();
                res.json(resObject);
                res.status(400).end();
            }
            else{
                resObject.success = true;
                resObject.data.code = 200;
                resObject.data.message = "Delete a record from employee table succeed!!";
                resObject.data.staff = null;
                res.json(resObject);
                res.status(200).end();
            }
        });
    }
    else{
        parametersInvalid(res);
    }
});
router.post('/update', (req, res)=>{
    let object = {
        employeeId: null,
        roleId: null,
        roleName: null,
        avatarUrl: null,
        name: null,
        sex: null,
        phoneNum: null,
        birthday: null,
        address: null,
        employeeDescription: null
    };
    if(req.body.employeeId !== undefined){
        object.employeeId = req.body.employeeId;
        object.roleId = req.body.roleId;
        object.roleName = req.body.roleName;
        object.avatarUrl = req.body.avatarUrl;
        object.name = req.body.name;
        object.sex = req.body.sex;
        object.phoneNum = req.body.phoneNum;
        object.birthday = req.body.birthday;
        object.address = req.body.address;
        object.employeeDescription = req.body.employeeDescription;
        dbTool.query(managementSql.updateRecord, [object.roleId, object.avatarUrl, object.name, object.sex,
            object.phoneNum, object.birthday, object.address, object.employeeDescription, object.employeeId],(err)=>{
            if(err){
                console.log(err);
                resObject.data.message = "Failed when update record within employee table!! err info:" + err;
                res.json(resObject);
                res.status(400).end();
            }
            else{
                resObject.success = true;
                resObject.data.code = 200;
                resObject.data.message = "Update records into file table and rel_article_menu table succeed!!";
                resObject.data.staff = object;
                res.json(resObject);
                res.status(200).end();
            }
        })
    }
    else{
        parametersInvalid(res);
    }
});

module.exports = router;
