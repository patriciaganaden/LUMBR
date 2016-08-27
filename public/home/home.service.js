'use strict';
(function () {
	angular
	.module("app")
	.factory("HomeService", HomeService);

	HomeService.$inject = ["$http", "$q"];

	function HomeService($http, $q) {
		var url = document.location.origin + "/home";
		var service = {};

		function getTree(){
			var deferred = $q.defer();

			var completeUrl = url + "/tree";

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		service.getTree = getTree;

		/* RETURN SERVICE */
		return service;
	}


})();
