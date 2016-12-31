//creates a module
angular.module('myApp', [])
	.controller('MyController', function($scope){
		this.name='person name';
		this.jobTitle= 'job title';
		this.tediousTask = 'tedious task';
		this.dirtyTask = 'dirty task';
		this.celebrity = 'celebrity';
		this.celebrityTwo = 'another celebrity';
		this.skill = 'skill';
		this.number = 'number'

		this.gender = 'f';

		$scope.changeGender = function() {
			$scope.gender = 'male';
		}
	});
