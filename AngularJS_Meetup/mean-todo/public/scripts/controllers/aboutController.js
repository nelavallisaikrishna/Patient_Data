angular.module('todoApp')
    .controller('AboutController', ['$scope', function($scope) {
        $scope.objectives = [
            'Create and finish a todo',
            'View list of todos',
            'Store todos in MongoDB',
            'Define schema and constraints using Mongoose',
            'Use middleware in Express for logging and parsing HTTP requests',
            'Create and expose REST API using Express',
            'Create SPA in Angular and consume REST API',
            'Implement simple form validation in Angular',
            'Organize Angular and Node code into modules (maintain, reuse, test)',
            'Experience popular software patterns like MVC, DI, etc. in action'
        ];
    }]);
