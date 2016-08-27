'use strict';
(function () {
	/* Guest App */
	angular
	.module("app")
	/* Guest Service Provider */
	.factory("LoginService", LoginService);

	/* Inject dependencies on Guest Service */
	// $http - for http requests
	// $q - for asynchronous functions
	LoginService.$inject = ["$http", "$q"];

	function LoginService($http, $q) {
		var url = document.location.origin;
		var service = {};

		/* SERVICES */
		function ValidateUser(username, password) {
			var deferred = $q.defer();
			var completeUrl = url + "/login/" + username + "/" + password;

			$http.get(completeUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}
		function CreateAnAccount(user) {
			var deferred = $q.defer();
			var completeUrl = [url, "signup"];

			$http.post(completeUrl.join('/'), user)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}

		/* PUT THE SERVICES IN THE ARRAY */
		service.ValidateUser = ValidateUser;
		service.CreateAnAccount = CreateAnAccount;

		/* RETURN SERVICE */
		return service;
	}


})();
