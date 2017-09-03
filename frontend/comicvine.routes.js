var modulo = angular.module('comicvineApp', ['ngRoute']);
modulo.config(function ($routeProvider) {

    $routeProvider
        .when('/landing', {
        controller: 'LandingController',
        templateUrl: 'Landing.html'
    }).otherwise({redirectTo: '/landing'});
});




