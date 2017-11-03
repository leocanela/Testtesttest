
  ons.bootstrap()
  .controller('appController', function($scope) {

  $scope.dados = {
    pretest: 0.1
  };

  $scope.todos = [{
      text: '4 Critérios POUNDing',
      done: false,
      lplus: 24
    }, {
      text: 'Nausea',
      done: false,
      lplus: 19
    }, {
      text: 'Fotofobia',
      done: false,
      lplus: 5.8
    }, {
      text: 'Fonofobia',
      done: false,
      lplus: 5.2
    }, {
      text: 'Piora com esforço',
      done: false,
      lplus: 3.8
    }

  ];


  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false,
      lplus: $scope.lplus
    });
    $scope.todoText = '';
    $scope.id = $scope.id++;
  };



  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
  $scope.getTotal = function() {
    var total = 0;
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].done === true) {
        var product = $scope.todos[i];
        total += +(product.lplus);

      }

    }
    return total;
  }
  $scope.getPost = function() {
    var total = 0;
    var posttest = $scope.dados.pretest
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].done === true) {
        var product = $scope.todos[i];
        total += (product.lplus);
        pretest = $scope.dados.pretest / (1 - $scope.dados.pretest);
        pto = pretest * total;
        posttest = pto / (1 + pto);
      }

    }
    return posttest.toFixed(3) * 100;
  }

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };


  });

