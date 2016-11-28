angular.module('todoApp')
    .controller('HeaderController', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }]);
