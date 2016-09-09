'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:priorityFilter
 * @function
 * @description
 * # priorityFilter
 * Filter in the appApp.
 */
angular.module('appApp')
    .filter('priorityFilter', function () {
        return function (input, pr) {
            var filtered = [];
            if(pr == ''){
                return input;
            } else {
                for(var i=0; i<input.length; i++){
                    if(pr == input[i].priority){
                        filtered.push(input[i]);
                    }
                }
                return filtered;
            }
        };
    });
