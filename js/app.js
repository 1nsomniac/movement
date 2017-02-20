angular.module("movement", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state( 'home', {
                url: '/',
                templateUrl: "../views/home.html",
                controller: "homeController",
            })
            .state( 'settings', {
                url: '/settings',
                templateUrl: "../views/settings.html",
                controller: 'settingsController',
            })

            $urlRouterProvider
                .otherwise('/')
    })

