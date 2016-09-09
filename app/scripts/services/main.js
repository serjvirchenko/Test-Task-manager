'use strict';

/**
 * @ngdoc service
 * @name appApp.main
 * @description
 * # main
 * Service in the appApp.
 */
angular.module('appApp')
    .factory('main', function ($localStorage, $location, $timeout) {

        return {
            tasks: function(){
                return $localStorage.tasks;
            },
            taskActions: {
                openTask: function(i){
                    $localStorage.tasks[i].opened = !$localStorage.tasks[i].opened;
                },
                pushTask: function(obj){
                    if(!$localStorage.tasks){
                        $localStorage.tasks = [];
                    }
                    obj.id = $localStorage.tasks.length;
                    obj.closed = false;
                    $timeout(function(){
                        $localStorage.tasks.push(obj);
                        $location.path('/');
                    }, 500);
                },
                editTask: function(i){
                    i = i.replace(':', '');
                    return $localStorage.tasks[i];
                },
                saveTask: function(obj){
                    $timeout(function(){
                        $localStorage.tasks[obj.id] = obj;
                        $location.path('/');
                    }, 500);
                },
                closeTask: function(i){
                    $localStorage.tasks[i].closed = true;
                },
                duplicateTask: function(obj){
                    obj.id = $localStorage.tasks.length;
                    obj.closed = false;
                    obj.comments = [];
                    $timeout(function(){
                        $localStorage.tasks.push(obj);
                        $location.path('/');
                    }, 500);
                },
                clearTasks: function(){
                    $localStorage.$reset();
                }
            },
            commentActions: {
                pushComment: function (i, text) {
                    var date = new Date(),
                        obj = {
                            date: date,
                            text: text
                        };
                    if (!$localStorage.tasks[i].comments) {
                        $localStorage.tasks[i].comments = [];
                    }
                    $localStorage.tasks[i].comments.push(obj);
                },
                removeComment: function (i, j) {
                    $localStorage.tasks[i].comments.splice(j, 1);
                }
            }
        };
    });
