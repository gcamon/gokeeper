
'use strict';

var express = require("express");
var mongoose = require('mongoose');
var db = require('./model');
var config = require('./config');
var route = require('./route');

var app = express();

var port = process.env.PORT || 2020;

app.listen(port);

mongoose.connect("mongodb://127.0.0.1:27017/gokeeper");
var model = db();


config.configuration(app);
route()

