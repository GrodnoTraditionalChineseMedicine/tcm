const express = require('express');
const app = express();
//running port
const port = 3001;
//third-party middleware
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

//api business logic
const adminRouter = require('./src/router/adminApi');
const emailRouter = require('./src/router/email');
const learntcmRouter = require('./src/router/learntcmApi');
const pediatricCourseRouter = require('./src/router/pediatricCourse');
const menusManagementRouter = require('./src/router/managementApi/menusManagement');
const roleManagementRouter = require('./src/router/managementApi/roleManagement');

//third-party middleware using
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware using
//前台系统Api
app.use('/api/email', emailRouter);
app.use('/api/learntcm',learntcmRouter);
app.use('/api/pediatric', pediatricCourseRouter);
//后台管理系统
app.use('/api/manage',adminRouter);
app.use('/api/manage/containers/content', menusManagementRouter);
app.use('/api/manage/containers/roles', roleManagementRouter);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;

