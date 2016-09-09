'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('MainCtrl', function ($scope, $localStorage, main) {

        $scope.view = 'add';
        $scope.main = main;
        angular.forEach($localStorage.tasks, function(val){
            val.opened = false;
        });

    });
