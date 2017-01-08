var movieapp = angular.module("movieapp", [
    "ngRoute",
    "ngCookies"
]);

movieapp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "homeController",
            controllerAs: "home"
        })
        .otherwise({
            redirectTo: "/"
        })
}]);
(function() {
    'use strict';

    movieapp.controller("homeController", function() {
        var vm = this;

        vm.message = "Hello World!";
    });
})();