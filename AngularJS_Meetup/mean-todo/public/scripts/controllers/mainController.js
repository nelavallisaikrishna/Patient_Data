angular.module('todoApp')
    .controller('MainController', ['$scope', 'todoService', 'logService', function($scope, todoService, logService) {
        $scope.formData = {};
        $scope.todos = [];

        // when landing on the page, get all todos and show them
        todoService.get().then(
            function(response) {
                $scope.todos = response.data;
                logService.success('todoService.get()', response);
            }, 
            function(response) {
                logService.failed('todoService.get()', response);
            }
        );

        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {
            console.log('MainController.createTodo() - formData:', $scope.formData);
            todoService.create($scope.formData).then(
                function(response) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.todos = response.data;
                    $scope.todoForm.$setPristine();
                    logService.success('todoService.create()', response);
                }, 
                function(response) {
                    logService.failed('todoService.create()', response);
                }
            );
        };

        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            console.log('MainController.deleteTodo() - id:', id);
            todoService.delete(id).then(
                function(response) {
                    $scope.todos = response.data;
                    logService.success('todoService.delete()', response);
                },
                function(response) {
                    logService.failed('todoService.delete()', response);
                }
            );
        };
    }]);
