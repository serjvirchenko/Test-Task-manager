'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:commFilter
 * @function
 * @description
 * # commFilter
 * Filter in the appApp.
 */
angular.module('appApp')
    .filter('commFilter', function () {
        return function (input, status) {
            var filter = [];
            if(!status){
                return input;
            } else {
                for (var i=0; i<input.length; i++){
                    if(status && (typeof(input[i].comments) == 'undefined' || input[i].comments.length == 0)){
                        filter.push(input[i]);
                    }
                }
                return filter;
            }
        };
    });
