angular.module('todoApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: '/views/main.html'
            })
            .when('/about', {
                controller: 'AboutController',
                templateUrl: '/views/about.html'
            })
            .otherwise( { redirectTo: '/' } );
    }]);
