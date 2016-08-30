/**
 * Created by Brian on 8/29/16.
 */
var myPortfolio = angular.module('myPortfolio', ['ngRoute']);

myPortfolio.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'homeView.html',
            controller: 'homeCtrl'
        }).otherwise({
        templateUrl: 'homeView.html',
        controller: 'homeCtrl'
    })
}]);