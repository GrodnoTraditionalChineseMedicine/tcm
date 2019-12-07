const express = require('express');
const app = express();
//running port
const port = 3001;
//third-party middleware
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//api business logic
const adminRouter = require('./src/router/adminApi');
const emailRouter = require('./src/router/email');
const learntcmRouter = require('./src/router/learntcmApi');
const pediatricCourseRouter = require('./src/router/pediatricCourse');
const menusManagementRouter = require('./src/router/managementApi/menusManagement');
const roleManagementRouter = require('./src/router/managementApi/roleManagement');
const articlesManagementRouter = require('./src/router/managementApi/articlesManagement');
const carouselManagementRouter = require('./src/router/managementApi/carouseManagement');
const employeeManagementRouter = require('./src/router/managementApi/staffManagement');
const uploadFile = require('./src/router/uploadImg');

//third-party middleware using
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/public",express.static('./public'));
//middleware using
//前台系统Api
app.use('/api/email', emailRouter);
app.use('/api/learntcm',learntcmRouter);
app.use('/api/pediatric', pediatricCourseRouter);
//后台管理系统
app.use('/api/manage',adminRouter);
app.use('/api/manage/containers/content', menusManagementRouter);
app.use('/api/manage/containers/roles', roleManagementRouter);
app.use('/api/manage/containers/articles', articlesManagementRouter);
app.use('/api/manage/containers/carouses', carouselManagementRouter);
app.use('/api/manage/containers/staffs', employeeManagementRouter);
app.use('/api/upload/files', uploadFile);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;

