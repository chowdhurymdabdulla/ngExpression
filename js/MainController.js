var MainController = function MainController($scope){
		$scope.myArray = ['Abdulla','Hasan', 'harsimran'];
};

angular
	.module('app')
	.controller('MainController', MainController);

