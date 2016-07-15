var kulnoisApp = angular.module('kulnois', ['starter.controllers' ]);

kulnoisApp.config([ '$routeProvider', function($routeProvider) {
		
	$routeProvider
		.when('/main', {
		templateUrl : 'pages/main.html',
		controller: 'MainCtrl'
	}).otherwise({
		redirectTo : '/main'
	});
} ]);