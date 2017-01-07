var formApp=angular.module('formApp', [])
	.controller('formController', function($scope) {
		$scope.formData ={

		};
		$scope.she = 'she';

		$scope.showBox= true;

		$scope.submitName = function(){			
			console.log($scope.formData.name);
			console.log($scope.luna);
		}


	});