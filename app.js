var movieapp = angular.module("movieapp", [
    "ngRoute",
    "ngCookies"
]);

movieapp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "homeController",
            controllerAs: "home"
        })
        .when("/login", {
            templateUrl: "templates/login.html",
            controller: "loginController",
            controllerAs: "login"
        })
        .otherwise({
            redirectTo: "/"
        })
});