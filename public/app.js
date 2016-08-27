'use strict';

(function(){
	angular
		.module("app",["ngRoute"])
		.config(config);
	
	config.$inject = ["$routeProvider"];
		
	function config($routeProvider){
		$routeProvider
			.when("/home", {
				"controller": "HomeCtrl",
				"templateUrl": "/home/home.view.html" })
			.when("/tree-library", {
				"controller": "TreeLibCtrl",
				"templateUrl": "/tree-library/tree-lib.view.html" })

			.otherwise({"redirectTo": "/home"});
	}

})();
