'use strict';

(function(){
	angular
		.module("app",["ngRoute", 'simplePagination', 'ngCookies'])
		.config(config);
	
	config.$inject = ["$routeProvider"];
		
	function config($routeProvider){
		$routeProvider
			.when("/home", {
				"controller": "HomeCtrl",
				"templateUrl": "/home/home.view.html" })
			.when("/login", {
				"controller": "LoginCtrl",
				"templateUrl": "/login/login.view.html" })
			.when("/signup", {
				"controller": "LoginCtrl",
				"templateUrl": "/login/signup.view.html" })
			.when("/dashboard", {
				"controller": "DashboardCtrl",
				"templateUrl": "/dashboard/dashboard.view.html" })
			.when("/dashboard/landClassification", {
				"controller": "LandClassificationCtrl",
				"templateUrl": "/dashboard/land-classification/land-classification.view.html" })
			.when("/dashboard/tree-library", {
				"controller": "TreeLibCtrl",
				"templateUrl": "/dashboard/tree-library/tree-lib.view.html" })
			.when("/dashboard/programManager", {
				"controller": "ProgramManagerCtrl",
				"templateUrl": "/dashboard/program-manager/program-manager.view.html" })
			.when("/dashboard/programManager/:plantedTree_id", {
				"controller": "PlantedTreeCtrl",
				"templateUrl": "/dashboard/program-manager/planted-tree.view.html" })
			.when("/dashboard/agroForestrySystem", {
				"controller": "AgroForestrySystemCtrl",
				"templateUrl": "/dashboard/agro-forestry-system/agro-forestry-system.view.html" })
			.when("/dashboard/landClassification", {
				"controller": "MapCtrl",
				"templateUrl": "/dashboard/map/map.view.html" })

			.otherwise({"redirectTo": "/login"});
	}

})();
