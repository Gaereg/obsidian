var obsiApp = angular.module('obsiApp', [ 
	'obsiAppCtrl',
  'ngRoute'
	]);

obsiApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'pages/home.html',
    })

    .when('/bio', {
    	templateUrl: 'pages/bio.html',
    })

    .when('/photos', {
      templateUrl: 'pages/photos.html',
    })

    .when('/videos', {
      templateUrl: 'pages/videos.html',
    })

    .when('/news', {
      templateUrl: 'pages/news.html',
    })

    .when('/music', {
      templateUrl: 'pages/music.html',
    })

    .otherwise({
      redirectTo : '/'
    });
}]);
