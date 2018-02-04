'use strict';

angular.module('libro')
    .service('libro', function ($http) {
        return {
            list: function (success) {
                return $http.get("/rest/libro").then(success);
            },
            save: function (test, success) {
                return $http.post("/rest/libro", test).then(success);
            },
            remove: function (id, success) {
                return $http.delete("/rest/libro/"+ id).then(success);
            },
            cargarDetalle: function (id, success) {
                return $http.get("/rest/libro"+ id).then(success);
            }
        };
    });
