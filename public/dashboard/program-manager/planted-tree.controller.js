'use strict';

(function(){
	angular
		.module("app")
		.controller("PlantedTreeCtrl", PlantedTreeCtrl);
		
	PlantedTreeCtrl.$inject = ["$scope", "$location", "$cookies", "ProgramManagerService", "Pagination", '$routeParams'];

	function PlantedTreeCtrl($scope, $location, $cookies, ProgramManagerService, Pagination, $routeParams){		
			
		// Redirect the user to log-in page
		if($cookies.get('user') == null) $location.path('/login');
		$scope.username = $cookies.get('user');

		$scope.logout = function(){
			$cookies.remove('user');
		}

		var currentPlantedTree_id = $routeParams.plantedTree_id;
		$scope.resultData = {};
		$scope.reports = [];
		$scope.steward = {};
		ProgramManagerService.getPlantedTreeInfo(currentPlantedTree_id)
	    	.then(function (res) {
			    $scope.resultData = res;
			})
			.catch(function (res) {
				alert(res.message);
			});
		ProgramManagerService.getReports(currentPlantedTree_id)
	    	.then(function (res) {
				$scope.reports = res;
			})
			.catch(function (res) {
				alert(res.message);
			});
		ProgramManagerService.getSteward(currentPlantedTree_id)
	    	.then(function (res) {
			    $scope.steward = res;
			})
			.catch(function (res) {
				alert(res.message);
			});
	}

})();
