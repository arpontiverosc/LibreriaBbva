'use strict';

angular.module('libro')
    .controller('DetailCtrl', function ($scope, $param, libro) {

        $scope.cargarDetalle = function() {
        	libro.cargarDetalle($param.id, function (detail) {
                $scope.libroForm = detail.data;
            });
        }

        $scope.cargarDetalle();
    });
