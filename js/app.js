
  ons.bootstrap()
  .controller('appController', function($scope) {
// Quero apagar isto
  $scope.dados = {
    pretest: 0.1,
    drgepretest: 0.38
  };

// Navegação pela lista de doenças
$scope.irpara = function($index) {
  console.log($scope.doencas[$index].nome);
  nav.pushPage($scope.doencas[$index].nome+'.html', {data: {title: $scope.doencas[$index].nome, ppp: $scope.doencas[$index].pt}})
}

//Lista de Doenças
 $scope.doencas = [{
      nome: 'Enxaqueca',
      desc: 'Diferencie enxaqueca de outras cefaléias',
      pt: 0.1
    }, {
      nome: 'DRGE',
      desc: 'Diagnóstico clínico e exames complementares',
      pt: 0.38
    }, 
  ];
//LRs de Enxaqueca
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

//LRs de DRGE
  $scope.drge = [{
      text: 'Pirose e/ou Regurgitação',
      done: false,
      lplus: 2.83
    }, {
      text: 'Prova terapêutica com IBP positiva',
      done: false,
      lplus: 1.86
    }, {
      text: 'Endoscopia digestiva alta sugestiva',
      done: false,
      lplus: 2.83
    }, {
      text: 'pHmetria de 24 horas',
      done: false,
      lplus: 9
    }
  ];

//Calcula Posttest de Enxaqueca
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
    return posttest * 100;
  }
// Calcula Posttest de DRGE
  $scope.drgePost = function() {
    var total = 0;
    var posttest = $scope.dados.drgepretest
    for (var i = 0; i < $scope.drge.length; i++) {
      if ($scope.drge[i].done === true) {
        var product = $scope.drge[i];
        total += (product.lplus);
        pretest = $scope.dados.drgepretest / (1 - $scope.dados.drgepretest);
        pto = pretest * total;
        posttest = pto / (1 + pto);
      }
    }
    return posttest*100;
  }

});

/* Outros
  }
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };



  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false,
      lplus: $scope.lplus
    });
    $scope.todoText = '';
    $scope.id = $scope.id++;
  };

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
*/
