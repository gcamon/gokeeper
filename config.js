'use strict';
var express = require('express')
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
var router = express.Router();


var configuration = function (app){
	//config
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');    


	//middleware
	app.use(session({
	  secret: 'keyboard cat',
	  resave: true,
	  saveUninitialized: true,
	}));
	app.use('/assets',express.static(__dirname + '/public'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(morgan('dev'));
	app.use('/',router)

}

module.exports = {
	configuration: configuration,
	router: router
}