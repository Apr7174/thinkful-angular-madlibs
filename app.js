//creates a module
angular.module('myApp', ['ngAnimate'])
	.controller('MyController', function($scope){

		$scope.gender = {
			she: "she",
		};

		$scope.submitForm = function(){
			this.showParagraph = !this.showParagraph;
			
		};

		$scope.startOver = function(){
			this.showParagraph = !this.showParagraph;
			this.name='';
			this.jobTitle= '';
			this.tediousTask = '';
			this.dirtyTask = '';
			this.celebrity = '';
			this.celebrityTwo = '';
			this.skill = '';
			this.number = ''
		};

	});
