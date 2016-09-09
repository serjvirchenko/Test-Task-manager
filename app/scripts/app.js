'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module('appApp', [
        'ngAnimate',
        'ngCookies',
        'ngStorage',
        'ngResource',
        'ngRoute',
        'xeditable'
    ])
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/add', {
              templateUrl: 'views/add.html',
              controller: 'MainCtrl'
            })
            .when('/add/:id', {
                templateUrl: 'views/add.html',
                controller: 'DuplicateCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'views/add.html',
                controller: 'EditCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    });
