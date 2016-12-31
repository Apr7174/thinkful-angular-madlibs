//creates a module
angular.module('myApp', [])
	.controller('MyController', function($scope){
		$scope.name='person name';
		$scope.jobTitle= 'job title';
		$scope.tediousTask = 'tedious task';
		$scope.dirtyTask = 'dirty task';
		$scope.celebrity = 'celebrity';
		$scope.celebrityTwo = 'another celebrity';
		$scope.skill = 'skill';
		$scope.number = 'number'

		$scope.gender = 'f';

		$scope.changeGender = function() {
			$scope.gender = 'male';
		}
	});
