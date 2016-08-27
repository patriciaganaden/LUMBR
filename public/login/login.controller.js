'use strict';
(function () {
	// Guest App
	angular
	.module("app")
	// Guest Controller
	.controller("LoginCtrl", LoginCtrl);

	// Inject dependencies to controller --------------------
	// $scope - for manipulating data in view
	// $window - for page redirection
	// LoginService - for asynchronous functions
	LoginCtrl.$inject = ["$scope", "$window", "LoginService", "$location", "$cookies"];

	/**************************
		GUEST CONTROLLER
	**************************/
	function LoginCtrl($scope, $window, LoginService, $location, $cookies){

		// Checks the cookie if a user data is stored
		var user = $cookies.get('user');
     	if(!(user == null)) $location.path('/dashboard');

		// initialize objects
		var user = {
			username:'',
			password:'',
			fullname:'',
			email:'',
			cpNumber:''
		};
		var su = {
			username:'',
			password:'',
			fullname:'',
			email:'',
			cpNumber:'',
			type: ''
		};
		var l = {
			username:'',
			password:''
		};
		var login_user;
		// function that will handle login
		$scope.login = function () {
			login_user = $scope.l;
			
			if(login_user!=undefined && login_user.username!="" && login_user.username!=undefined && login_user.password!="" && login_user.password!=undefined){
				LoginService.ValidateUser(login_user.username, login_user.password)
				// if successful or status code == 200
				.then(function (res) {
					Materialize.toast("Logging you in!", 2000, 'rounded');
					$location.path('/dashboard');
					$cookies.put('user', login_user.username);
				})
				// if failure or status code = 404, 401, etc.
				.catch(function (res) {
					Materialize.toast(res.message, 2000, 'rounded');
					$location.path('/login');
				});
			}
			else{
				Materialize.toast("Fill up the form!", 2000, 'rounded');
			}
		}

		// function that will handle signup
		$scope.signup = function () {
			LoginService.CreateAnAccount($scope.su)
			// if successful or status code == 200
			.then(function (res) {
				Materialize.toast("Registration successful!", 3000, 'rounded');
				if(confirm('Proceed to login?')){
					$window.location.reload();
					$cookies.put('user', su.username);
				}else{
					//$("form#s")[0].reset();
				}
			})
			// if failure or status code = 404, 401, etc.
			.catch(function (res) {
				Materialize.toast("Username ( "+$scope.su.username+" ) already exists", 3000, 'rounded');
			});
		}
	}


})();
