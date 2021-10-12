import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import log4js from 'log4js';

import AdminJsRouter from "@/adminBro"
var logger = require('morgan');

var indexRouter = require('@/routes/index');
var usersRouter = require('@/routes/users');

var app = express();

app.use('/admin', AdminJsRouter)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
