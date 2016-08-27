'use strict';

(function(){
	angular
		.module("app")
		.controller("TreeLibCtrl", TreeLibCtrl);
		
	TreeLibCtrl.$inject = ["$scope", "$location"];

	function TreeLibCtrl($scope, $location){
		
		$(".button-collapse").sideNav();
	}

})();
