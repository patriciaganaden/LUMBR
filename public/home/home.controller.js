'use strict';

(function(){
	angular
		.module("app")
		.controller("HomeCtrl", HomeCtrl);
		
	HomeCtrl.$inject = ["$scope", "$location"];
	function HomeCtrl($scope, $location){
		console.log("HEY");
	}
})();
