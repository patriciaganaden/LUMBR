'use strict';

(function(){
	angular
		.module("app")
		.controller("AgroForestrySystemCtrl", AgroForestrySystemCtrl);
		
	AgroForestrySystemCtrl.$inject = ["$scope", "$location", "$cookies", "TreeLibService", "Pagination"];

	function AgroForestrySystemCtrl($scope, $location, $cookies, TreeLibService, Pagination){

		// Redirect the user to log-in page if not yet logged-in
		if($cookies.get('user') == null) $location.path('/login');
		$scope.username = $cookies.get('user');

		$scope.logout = function(){
			$cookies.remove('user');
		}

		$(".button-collapse").sideNav();
		$scope.trees = [];
		TreeLibService.getAllTrees()
			.then(function (res) {
				$scope.trees = res;
				$scope.pagination = Pagination.getNew(9);
				$scope.pagination.numPages = 0;
				$scope.currentPage = 0;
				$scope.pageSize = 0;
				$scope.pageSize = 9;
				$scope.pagination.numPages = Math.ceil($scope.trees.length/$scope.pagination.perPage);
				$scope.numberOfPages=function(){
					return Math.ceil($scope.trees.length/$scope.pageSize);                
				}
			})
			.catch(function (res) {
				alert(res.message);
			});
	}

})();
