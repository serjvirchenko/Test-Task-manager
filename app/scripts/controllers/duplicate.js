'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:DuplicateCtrl
 * @description
 * # DuplicateCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('DuplicateCtrl', function ($scope, $routeParams, main) {

        var newtask = angular.copy(main.taskActions.editTask($routeParams.id));

        $scope.view = 'duplicate';
        $scope.main = main;
        $scope.newtask = newtask;
        $scope.newtask.deadline = new Date($scope.newtask.deadline);
    });
