'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:dateFilter
 * @function
 * @description
 * # dateFilter
 * Filter in the appApp.
 */
angular.module('appApp')
    .filter('dateFilter', function ($filter) {
        return function (input, dt) {
            var date = $filter('date')(dt, 'yyyy-MM-dd');
            if(dt == '' || dt == null || typeof(dt) == 'undefined'){
                return input;
            } else {
                var filtered = [];
                var letterMatch = new RegExp(date, 'i');
                for (var i = 0; i < input.length; i++) {
                    var date2 = $filter('date')(input[i].deadline, 'yyyy-MM-dd');
                    if (letterMatch.test(date2)) {
                        filtered.push(input[i]);
                    }
                }
                return filtered;
            }
        };
    });
