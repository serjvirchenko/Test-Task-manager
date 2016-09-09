'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:deadline
 * @description
 * # deadline
 */
angular.module('appApp')
    .directive('deadline', function () {
        return function(scope, element, attrs) {
            scope.$watch('main',function(){
                var now = new Date()
                var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
                var other = new Date(attrs.deadline);
                var otherDate = new Date(other.getFullYear(), other.getMonth(), other.getDate()).valueOf();
                if (otherDate < today) {
                    element.addClass('active');
                }
            })

        }
    });
