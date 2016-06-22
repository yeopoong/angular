angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope, todoStorage) {
        $scope.todos = todoStorage.get();

        $scope.add = function(todoTitle) {
            todoStorage.post(todoTitle);
            $scope.newTodo = '';
        }

        $scope.clearCompleted = function() {
            todoStorage.clearCompleted();
        }

        $scope.remove = function(todo) {
            todoStorage.delete(todo);
        }
    });
