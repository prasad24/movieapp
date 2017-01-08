var movieapp = angular.module("movieapp", [
    "ngRoute",
    "ngCookies"
]);

movieapp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/templates/home.html",
            controller: "homeController",
            controllerAs: "home"
        })
        .otherwise({
            redirectTo: "/"
        })
});