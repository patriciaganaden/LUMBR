'use strict';
(function () {
	/* Randomize App */
	angular
	.module("app")
	/* Randomize Service Provider */
	.factory("TreeLibService", TreeLibService);

	TreeLibService.$inject = ["$http", "$q"];

	function TreeLibService($http, $q) {
		var url = document.location.origin;
		var service = {};
		
		function getAllTrees(){
			var deferred = $q.defer();

			var completeUrl = url + "/trees";

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}
		service.getAllTrees = getAllTrees;

		/* RETURN SERVICE */
		return service;
	}
})();
