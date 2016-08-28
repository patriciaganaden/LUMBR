'use strict';

(function(){
	angular
		.module("app")
		.controller("DashboardCtrl", DashboardCtrl);
		
	DashboardCtrl.$inject = ["$scope", "$location", "$cookies"];
	function DashboardCtrl($scope, $location, $cookies){

		// Redirect the user to log-in page
		if($cookies.get('user') == null) $location.path('/login');
		$scope.username = $cookies.get('user');

		$scope.logout = function(){
			$cookies.remove('user');
			$cookies.remove('type');
		}
		$scope.type = $cookies.get('type');
		console.log($scope.type);
		$scope.employee = 'employee';
		$scope.employer = 'employer';
	}
})();
