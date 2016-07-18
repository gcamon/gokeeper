var myApp = angular.module("myApp",["ngRoute","ngAnimate"]);

myApp.config(function($routeProvider){
	$routeProvider

	.when("/",{
		templateUrl: 'assets/pages/default.html',
		controller: 'homeController'
	})

	.when("/create",{
		templateUrl: 'assets/pages/category.html',
		controller: 'categoryController'
	})

	.when('/educational',{
		templateUrl: 'assets/pages/education.html',
		controller: 'eduController'
	})

	.when('/commercial',{
		templateUrl: 'assets/pages/commerce.html',
		controller: 'comController'
	})

	.when('/private',{
		templateUrl: 'assets/pages/personal.html',
		controller: 'priController'
	})

	.when('/terms_and_conditions',{
		templateUrl: 'assets/pages/terms_and_conditions.html',
		controller: 'termsController'
	})

})

myApp.controller("homeController",["$scope",function($scope){

}]);

myApp.controller("categoryController",["$scope",function($scope){

}]);

myApp.controller("eduController",["$scope",function($scope){

}]);

myApp.controller("comController",["$scope",function($scope){

}]);

myApp.controller("priController",["$scope",function($scope){
	$scope.admin = {}

}]);

myApp.controller("termsController",["$scope",function($scope){

}]);




