const express = require('express');
const app = express();
//third-party middleware
const cookieParser = require('cookie-parser');
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
const momentsManagementRouter = require('./src/router/managementApi/momentManagement');
const uploadFile = require('./src/router/uploadImg');
const uploadVideo = require('./src/router/uploadVideos.js');
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
app.use("/", express.static("./build"));
app.use('/api/manage',adminRouter);
app.use('/api/manage/containers/content', menusManagementRouter);
app.use('/api/manage/containers/roles', roleManagementRouter);
app.use('/api/manage/containers/articles', articlesManagementRouter);
app.use('/api/manage/containers/carousels', carouselManagementRouter);
app.use('/api/manage/containers/staffs', employeeManagementRouter);
app.use('/api/manage/containers/moments', momentsManagementRouter);
app.use('/api/upload/picture', uploadFile);
app.use('/api/upload/videos', uploadVideo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    //next(createError(404));
    if(req.url.startsWith('/api/')||req.url.startsWith('/static/')){
        return next;
    }
    else{
        return res.sendFile(path.resolve('build/index.html'));
    }
});

// error handler
app.use(function(err, req, res, next) {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;

