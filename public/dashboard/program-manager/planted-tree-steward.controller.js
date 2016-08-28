'use strict';
$(document).ready(function () {

});
(function(){
	angular
		.module("app")
		.controller("PlantedTreeStewardCtrl", PlantedTreeStewardCtrl);
		
	PlantedTreeStewardCtrl.$inject = ["$scope", "$location", "$cookies", "ProgramManagerService", "Pagination", '$routeParams', '$window'];

	function PlantedTreeStewardCtrl($scope, $location, $cookies, ProgramManagerService, Pagination, $routeParams, $window){		
			
		// Redirect the user to log-in page
		if($cookies.get('user') == null) $location.path('/login');
		$scope.username = $cookies.get('user');

		$scope.logout = function(){
			$cookies.remove('user');
		}

		var currentPlantedTree_id = $routeParams.plantedTree_id;
		$scope.resultData = {};
		$scope.reports = [];
		$scope.steward = {};
		ProgramManagerService.getPlantedTreeInfo(currentPlantedTree_id)
	    	.then(function (res) {
			    $scope.resultData = res;
			})
			.catch(function (res) {
				alert(res.message);
			});

		$scope.AddReport = function () {
			//check if there is a file upload, sets to default if no file upload
			if(document.getElementById("uploadPicBtn").files.length == 0){
				$scope.report.reportImg = "../../uploads/default.jpg";
			}

			// Call ProgramManagerService.AddReport()
			$scope.report.treeName = $scope.resultData.treeName;
			$scope.report.employerUname = $scope.resultData.owner;
			$scope.report.employeeUname = $scope.resultData.plantedBy;
			ProgramManagerService.AddReport($scope.report)
				.then(function (res) {
					Materialize.toast("Report added successfully!", 3000, 'rounded');

					// Once report is added and there is a file upload, call ProgramManagerService.UploadToUrl() for file upload.
					if(document.getElementById("uploadPicBtn").files.length != 0){
						var file = $scope.report.pictureFile;
						console.log($scope.report + "");
						$scope.report.reportImg = file.name;

						ProgramManagerService.UploadToUrl($scope.report.pictureFile, res.report_id)
							.then(function (res){
								Materialize.toast("report picture was added successfully!", 3000, 'rounded');
							})
							.catch(function (res){
								Materialize.toast("FAIL! Something's wrong with file upload:(", 3000, 'rounded');
							});
					}

					$window.location.reload();
				})
				.catch(function (res) {
					Materialize.toast("FAIL! Something's wrong :(", 3000, 'rounded');
				});
		}
	}

})();
