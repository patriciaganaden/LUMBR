'use strict';
(function () {
	angular
	.module("app")
	.controller("LoginCtrl", LoginCtrl);

	// Inject dependencies to controller --------------------
	// $scope - for manipulating data in view
	// $window - for page redirection
	// LoginService - for asynchronous functions
	LoginCtrl.$inject = ["$scope", "$window", "LoginService", "$location", "$cookies"];

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
					Materialize.toast("Successfully logged in!", 2000, 'rounded');
					$location.path('/dashboard');
					$cookies.put('user', res.username);
					$cookies.put('type', res.type);
				})
				// if failure or status code = 404, 401, etc.
				.catch(function (res) {
					Materialize.toast(res.message, 2000, 'rounded');
					$location.path('/login');
				});
			}
			else{
				Materialize.toast("Please enter your username and/or password!", 2000, 'rounded');
			}
		}

		// function that will handle signup
		$scope.signup = function () {

			$scope.type = $("#type option:selected").text();
			if(type == "Owner") $scope.type = 'employer';
			else $scope.type = 'employee';

			$scope.newUser = {
				username: $scope.su.username,
				password: $scope.su.password,
				fullname: $scope.su.fullname,
				email: $scope.su.email,
				cpNumber: $scope.su.cpNumber,
				type: $scope.type
			}
			console.log($scope.newUser);

			LoginService.CreateAnAccount($scope.newUser)
			// if successful or status code == 200
			.then(function (res) {
				console.log(res);
				Materialize.toast("Registration successful!", 2000, 'rounded');
				setTimeout(window.location.reload(), 5000);
				$cookies.put('user', $scope.newUser.username);
				$("#signUpForm").trigger("reset");
			})
			// if failure or status code = 404, 401, etc.
			.catch(function (res) {
				console.log(res);
				Materialize.toast("Please fill out all fields!", 3000, 'rounded');
				//Materialize.toast("Username ' "+$scope.newUser.username+" ' already exists", 3000, 'rounded');
			});
		}
	}


})();
