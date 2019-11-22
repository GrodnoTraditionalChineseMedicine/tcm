const express = require('express');
const pediatricCourseRouter = express.Router();
const sqlJsonObeject = require('../dao/pediatricCourseSql');
const pediatricCousrseObject = require('../jsonObject/pediatricCourseObject');
const dbTool = require('../dao/databaseConnection');
//请求所有小儿推拿课程
pediatricCourseRouter.get('/courses', (req, res)=>{
    dbTool.query(sqlJsonObeject.getAllCourses, (err, result)=>{
       if(err){
           pediatricCousrseObject.success = false;
           pediatricCousrseObject.data.code = 400;
           res.json(pediatricCousrseObject);
           console.log("Failed when query executing!! /n err info: " + err.toString());
           res.end();
       }
       else{
           pediatricCousrseObject.success = true;
           pediatricCousrseObject.data.code = 200;
           const coursesData = [];
           for(let i  = 0; i < result.length; i ++){
               let course ={
                   "courseId": "",
                   "title": "",
                   "lecturer": "",
                   "address": "",
                   "lectureTime": "",
                   "publishedTime": ""
           };
               //将datetime转化成date形式的字符串
               const published_date = new Date(result[i].published_time.toString());
               course.publishedTime = published_date.getFullYear() + '-' + published_date.getMonth() + '-' + published_date.getDate();
               const lecture_date = new Date(result[i].lecture_time.toString());
               course.lectureTime = lecture_date.getFullYear() + '-' + lecture_date.getMonth() + '-' + lecture_date.getDate();
               course.courseId = result[i].course_id;
               course.title = result[i].title;
               course.lecturer = result[i].lecturer;
               course.address = result[i].address;
               coursesData.push(course);
       }

           pediatricCousrseObject.data.courses = coursesData;
           res.json(pediatricCousrseObject);
           res.end();
    }
    });
});

module.exports = pediatricCourseRouter;
