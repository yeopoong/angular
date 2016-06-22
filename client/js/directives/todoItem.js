angular.module('todomvc')
    .directive('todoItem', function (){
      return {
        scope: {        // 디렉티브 스코프 설정
          data: '=',    // 양방향 바인딩
          onRemove: '&' // 참고 바인딩. 함수 설정시 사용함
        },
        link: function(scope) {
            scope.remove = function (todoId) {
                scope.onRemove({todoId: todoId});
            }
        },
        template:
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<input type="checkbox" ng-model="data.completed" ng-click="update(todo)">' +
          '</span>' +
          '<input type="text" class="form-control"' +
            'ng-model="data.title" ng-blur="update(todo)">' +
          '<div class="input-group-btn">' +
            '<button class="btn btn-danger" ng-click="remove(data.id)">Remove</button>' +
          '</div>' +
        '</div>'
      }
    });