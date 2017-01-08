var movieapp = angular.module("movieapp", [
    "ngRoute",
    "ngCookies"
]);

movieapp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/templates/home.html",
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