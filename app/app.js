var movieapp = angular.module("movieapp", [
    "ngRoute",
    "ngCookies"
]);

movieapp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "scripts/controllers/homeController.js",
            controllerAs: "home"
        })
        .otherwise({
            redirectTo: "/"
        })
});
