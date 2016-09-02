/**
 * Created by Brian on 8/29/16.
 */
(function () {
    var home = angular.module('home', []);

    home.controller('QuestionsController', function () {
        console.log("controller initialized");
        this.addPoll = function () {
            console.log("inside function");
        };
    });
})();