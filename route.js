'use strict';

var path = require('path');
var route = require('./config');
var router = route.router;


var basicRoute = function () {

	router.get('/',function (req,res){
		res.render('index');
	})

	router.post('/signup', function (req,res){

	})

}

module.exports = basicRoute;
