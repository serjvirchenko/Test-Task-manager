'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('EditCtrl', function ($scope, $routeParams, main) {

        var newtask = angular.copy(main.taskActions.editTask($routeParams.id));

        $scope.view = 'edit';
        $scope.main = main;
        $scope.newtask = newtask;
        $scope.newtask.deadline = new Date($scope.newtask.deadline);

   });
