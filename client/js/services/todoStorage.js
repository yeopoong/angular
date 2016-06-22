angular.module('todomvc')
    .factory('todoStorage', function () {

      var storage = {
        todos : [{
            id: 1, 
            title: '청소하기',
            completed: true
        }, {
            id: 2, 
            title: '운동',
            completed: false
        }, {
            id: 3, 
            title: '코드랩',
            completed: false
        }],

        clearCompleted: function () {
            console.log('clearCompleted');
            var incompletedTodos = storage.todos.filter(function (todo) {
                return todo.completed === false;
            })
            angular.copy(incompletedTodos, storage.todos);
        },

        delete: function (todoId) {
            console.log('remove() todoId:', todoId);

            var findIndex = storage.todos.findIndex(function (todo) {
                return todo.id === todoId;
            });

            if (findIndex > -1) {
                storage.todos.splice(findIndex, 1);
            }
        },

        post: function (todoTitle) {
            todoTitle = todoTitle.trim();
            if (!todoTitle) return;

            var newId = storage.todos.length === 0 ?
                1 : storage.todos[storage.todos.length - 1].id + 1;

            var newTodo = {
                id: newId,
                title: todoTitle,
                completed: false
            };

            storage.todos.push(newTodo);

            
        },

        get: function () {
          return storage.todos;
        }
    };

    return storage;
});