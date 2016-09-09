'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:closedFilter
 * @function
 * @description
 * # closedFilter
 * Filter in the appApp.
 */
angular.module('appApp')
    .filter('closedFilter', function ($filter) {
        return function (input, closed) {
            if(!closed){
                return input;
            } else {
                var now = new Date()
                var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf()
                var filtered = [];
                for(var i=0; i<input.length; i++){
                    if(closed == input[i].closed){
                        filtered.push(input[i]);
                    } else if(closed == '2'){
                        var other = new Date(input[i].deadline);
                        var otherDate = new Date(other.getFullYear(), other.getMonth(), other.getDate()).valueOf();

                        if (otherDate < today) {
                            filtered.push(input[i]);
                        }
                    }
                }
                return filtered;
            }
        };
    });
