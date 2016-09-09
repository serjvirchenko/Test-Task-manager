'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('MainCtrl', function ($scope, main) {

        $scope.currDate = new Date();


        $scope.view = 'add';
        $scope.main = main;
        $scope.tasks = main.tasks();
        $scope.filter = {
            withoutCom: false,
            priority: ''
        };
        angular.forEach($scope.tasks, function(val){
            val.opened = false;
        });

        $scope.pushComment = function(i, el){
            main.commentActions.pushComment(i, el);
            $scope.tasks[i].textComment = '';
        }

    });
