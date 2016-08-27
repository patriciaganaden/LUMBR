'use strict';

(function(){
	angular
		.module("app")
		.controller("MapCtrl", MapCtrl);
		
	MapCtrl.$inject = ["$scope", "$location", "$cookies"];

	function MapCtrl($scope, $location, $cookies){

		// Redirect the user to log-in page if not yet logged-in
		if($cookies.get('user') == null) $location.path('/login');
		$scope.username = $cookies.get('user');

		$scope.logout = function(){
			$cookies.remove('user');
		}
		
		$(".button-collapse").sideNav();
	}

})();
