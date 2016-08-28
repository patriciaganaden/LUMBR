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
		
		function getAllPlantedTrees(username){
			var deferred = $q.defer();

			var completeUrl = url + "/plantedTree/byOwner/" + username;

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		function getAllPlantedTreesOfSteward(username){
			var deferred = $q.defer();

			var completeUrl = url + "/plantedTree/byPlantedBy/" + username;

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

		function AddReport(newReport) {
			console.log(newReport);
			var deferred = $q.defer();
			var completeUrl = url + "/report";

			$http.post(completeUrl, newReport)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		function UploadToUrl(file, report_id){
			var completeUrl = url + "/report-picture/"+report_id;
			var fd = new FormData();
			var deferred = $q.defer();
			fd.append('file', file);

			$http.post(completeUrl, fd, {
				transformRequest: angular.identity,
			//	headers: {'Content-Type': 'multipart/form-data'}
				headers: {'Content-Type': undefined }
			})
			.success(function (data){
				deferred.resolve(data);
			})
			.error(function (data){
				deferred.reject(data);
			});
			return deferred.promise;
		}

		service.getAllPlantedTrees = getAllPlantedTrees;
		service.getAllPlantedTreesOfSteward = getAllPlantedTreesOfSteward;
		service.getPlantedTreeInfo = getPlantedTreeInfo;
		service.getOneTree = getOneTree;
		service.getReports = getReports;
		service.getSteward = getSteward;
		service.AddReport = AddReport;
		service.UploadToUrl = UploadToUrl;

		/* RETURN SERVICE */
		return service;
	}
})();