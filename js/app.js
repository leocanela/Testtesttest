
ons.bootstrap()
.controller('appController', function($scope) {

//Todos os dados das doenças
$scope.tudo = [{
  nomedoenca: 'Enxaqueca',
  descdoenca: 'Diferencie enxaqueca de outras cefaléias',
  nomepag: 'enxaqueca',
  pretest: 0.1,
  lrs: [{
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
  }]},
  {
    nomedoenca: 'DRGE',
    descdoenca: 'Diagnóstico clínico e exames complementares',
    nomepag: 'drge',
    pretest: 0.38,
    lrs: [{
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
    }]},
    {
      nomedoenca: 'ITU',
      descdoenca: 'Diagnóstico clínico de ITU',
      nomepag: 'itu',
      pretest: 0.48,
      lrs: [{

        text: 'Disúria e urgência',
        done: false,
        lplus: 3.47
      }, {
        text: 'Ausência de corrimento vaginal',
        done: false,
        lplus: 21.3
      }, {
        text: 'Nitrito',
        done: false,
        lplus: 10
      }


      ]}


      }]

      $scope.paginaatual = {};

// Navegação pela lista de doenças
$scope.irpara = function($index) {
  $scope.paginaatual = $scope.tudo[$index].nomepag
  console.log($scope.tudo[$index].nomepag);
  nav.pushPage($scope.tudo[$index].nomepag+'.html', {data: {title: $scope.tudo[$index].nomedoenca}})
  $scope.paginaatual = {
    nomepag: $scope.tudo[$index].nomepag, 
    nomedoenca: $scope.tudo[$index].nomedoenca,
    descdoenca: $scope.tudo[$index].descdoenca,
    pretest: $scope.tudo[$index].pretest,
    lrs: $scope.tudo[$index].lrs,
  }
}

//Calcula Pos-Teste
$scope.getPost = function() {
  var total = 0;
  var posttest = $scope.paginaatual.pretest
  for (var i = 0; i < $scope.paginaatual.lrs.length; i++) {
    if ($scope.paginaatual.lrs[i].done === true) {
      var product = $scope.paginaatual.lrs[i];
      total += (product.lplus);
      pretest = $scope.paginaatual.pretest / (1 - $scope.paginaatual.pretest);
      pto = pretest * total;
      posttest = pto / (1 + pto);
    }

  }
  return posttest * 100;
}




});