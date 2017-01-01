//creates a module
angular.module('myApp', [])
	.controller('MyController', function(){
		// this.name='';
		// this.jobTitle= '';
		// this.tediousTask = 'tedious task';
		// this.dirtyTask = 'dirty task';
		// this.celebrity = 'celebrity';
		// this.celebrityTwo = 'another celebrity';
		// this.skill = 'skill';
		// this.number = 'number'

		this.gender = 'f';

		function changeGender() {
			//this.gender = 'male';
			console.log("changeGender");
		}

		this.changeGender = changeGender;

		this.showParagraph = false;

		//didnt work - created a new "this" reference
		//creates a functino called submitForm
		// $scope.submitForm = function(){
		// 	console.log("submitForm");
		// 	this.showParagraph = !this.showParagraph;
		// }

		function submitForm(){
			this.showParagraph = !this.showParagraph;
		}

		this.submitForm = submitForm;

	});
