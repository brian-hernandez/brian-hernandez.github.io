/**
 * Created by Brian on 8/29/16.
 */
var myPortfolio = angular.module('myPortfolio', ['ngRoute', 'home']);

myPortfolio.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '../Home/homeView.html',
            controller: 'homeCtrl'
        }).otherwise({
        templateUrl: 'homeView.html',
        controller: 'homeCtrl'
    })

}]);