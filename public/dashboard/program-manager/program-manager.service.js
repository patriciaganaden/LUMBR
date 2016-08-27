'use strict';
(function () {
	/* Randomize App */
	angular
	.module("app")
	/* Randomize Service Provider */
	.factory("ProgramManagerService", ProgramManagerService);

	ProgramManagerService.$inject = ["$http", "$q"];

	function ProgramManagerService($http, $q) {
		var url = document.location.origin;
		var service = {};
		
		function getAllPlantedTrees(){
			var deferred = $q.defer();

			var completeUrl = url + "/plantedTree";

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		function getPlantedTreeInfo(plantedTree_id){
			var deferred = $q.defer();
			var completeUrl = url + "/plantedTree/" + plantedTree_id;
			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		function getOneTree(treeName){
			var deferred = $q.defer();

			var completeUrl = url + "/trees/" + treeName;

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		function getReports(plantedTree_id){
			var deferred = $q.defer();

			var completeUrl = url + "/report/byPlantedTreeId/" + plantedTree_id;

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		function getSteward(plantedTree_id){
			var deferred = $q.defer();

			var completeUrl = url + "/user/plantedTree/" + plantedTree_id;

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		service.getAllPlantedTrees = getAllPlantedTrees;
		service.getPlantedTreeInfo = getPlantedTreeInfo;
		service.getOneTree = getOneTree;
		service.getReports = getReports;
		service.getSteward = getSteward;

		/* RETURN SERVICE */
		return service;
	}
})();