'use strict';

angular.module('libro')
    .controller('LibrosCtrl', function ($scope, libro) {

        $scope.load = function() {
        	libro.list(function (list) {
                $scope.list = list.data;
            });
        }

        $scope.save = function() {
        	libro.save($scope.form, function() {
                $scope.load();
            });
        }
        
        $scope.remove = function(id) {
        	libro.remove(id, function() {
                $scope.load();
            });
        }

        $scope.form = {};

        $scope.load();
    });
