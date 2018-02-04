//'use strict';
//angular
//    .module('test', ['ngRoute'])
//    .config(function ($routeProvider) {
//        $routeProvider
//            .when('/', {
//                templateUrl: 'views/list.html',
//                controller: 'ListCtrl',
//                controllerAs: 'list'
//            })
//            .when('/:id', {
//                templateUrl: 'views/detail.html',
//                controller: 'DetailCtrl',
//                controllerAs: 'detail'
//            })
//            .otherwise({
//                redirectTo: '/'
//            });
//    });

'use strict';
angular
    .module('libro', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/listLibros.html',
                controller: 'LibrosCtrl',
                controllerAs: 'list'
            })
            .when('/:id', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl',
                controllerAs: 'detail'
            })
            .otherwise({
                redirectTo: '/'
            });
    });





