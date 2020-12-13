var TodoApp = angular.module('TodoApp', []) 
TodoApp.controller('TodoController', ['$scope', function($scope) {

		
		$scope.removeItem = function(todo) {
			var DeleteItemChoice = prompt('delete?')
			
			if(DeleteItemChoice == 'yes') {
				var removedItem = $scope.todos.indexOf(todo);
				$scope.todos.splice(removedItem, 1);
				$scope.message = $scope.todos.length;
			}
		}

		
		$scope.addTodoItem = function() {
			$scope.todos.push({
				name: $scope.todoItem.name
			});
			$scope.todoItem.name = "";
			$scope.message = $scope.todos.length;
		}

		$scope.todos = [
			{
				name: 'ADD ' 	
			}
		];
		$scope.message = $scope.todos.length;

}]);