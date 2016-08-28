'use strict';

var treeName = "";
var owner = "";
var steward = "";

(function(){
	angular
		.module("app")
		.controller("ProgramManagerStewardCtrl", ProgramManagerStewardCtrl);
		
	ProgramManagerStewardCtrl.$inject = ["$scope", "$location", "$cookies", "ProgramManagerService", "Pagination"];

	function ProgramManagerStewardCtrl($scope, $location, $cookies, ProgramManagerService, Pagination){
		
		// Redirect the user to log-in page
		if($cookies.get('user') == null) $location.path('/login');
		$scope.username = $cookies.get('user');

		$scope.logout = function(){
			$cookies.remove('user');
		}

		$scope.plantedTrees = [];
		
		ProgramManagerService.getAllPlantedTreesOfSteward($scope.username)
			.then(function (res) {
				$scope.plantedTrees = res;
			})
			.catch(function (res) {
				alert(res.message);
			});
	}

})();
