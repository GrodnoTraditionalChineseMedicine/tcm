const express = require('express');
const app = express();
//running port
const port = 3001;
//third-party middleware
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

//api business logic
const adminApi = require('./src/router/adminApi');
const emailRouter = require('./src/router/email');

//third-party middleware using
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware using
app.use('/api/admin',adminApi);
app.use('/api/email', emailRouter);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;

