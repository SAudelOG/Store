(function () {
	angular.module('tienda.controllers', [])

	.controller('tiendaTodoController', ['$rootScope', '$scope', 'tiendaService', function($rootScope,$scope, tiendaService){
	
		tiendaService.all().then( function (result){
 			$scope.todoPersona = result.data;

 			$scope.nombrePerfil = $scope.todoPersona.Nombre + " " + $scope.todoPersona.Apaterno + " " + $scope.todoPersona.Amaterno;
 			$scope.edad = $scope.todoPersona.Edad
 			$scope.categorias = $scope.todoPersona.Categorias;
 			$scope.colores = $scope.todoPersona.Colores;
 			$scope.cliente = $scope.todoPersona.Info;
 	
 			$rootScope.title = "Metamorfosis" + " | " + $scope.nombrePerfil;
		});
	}])

	.controller('CategoriaTipoController', ['$rootScope', '$routeParams', '$scope', 'tiendaService', function($rootScope, $routeParams, $scope, tiendaService){
		var cid = parseInt($routeParams.cid);
		var tid = parseInt($routeParams.tid);

		tiendaService.byidCategoriaidSede(cid, tid).then(function (result){
			$scope.categoria = result.resultCategoria;
			$scope.tipo = result.resultTipo;

			console.log($scope.categoria);
			console.log($scope.tipo);

			$rootScope.title = $scope.tipo.Marca + " | " + $scope.tipo.Nombre;
		});
	}])

	.controller('filtroCategoriaController',['$rootScope', '$routeParams', '$scope', 'tiendaService', function($rootScope, $routeParams, $scope, tiendaService){
		var cid = parseInt($routeParams.cid);

		tiendaService.byidCategoria(cid).then(function (result){
			
			$scope.categoria = categorias = result;
			$scope.tipos = result.Tipos;

			$rootScope.title = title = "Metamorfosis | " + $scope.categoria.Nombre;
			
		});
	}])

	.controller('perfilController', ['$rootScope', '$routeParams', '$scope', 'tiendaService', function($rootScope, $routeParams, $scope, tiendaService){
		var uid = parseInt($routeParams.uid);
		
		tiendaService.Usr(uid)
			.then(function (result){
				console.log (result);
				$scope.perfil = result;
				$scope.info = $scope.perfil.Info;

				$rootScope.title = $scope.perfil.Nombre + " " + $scope.perfil.Apaterno + " " + $scope.perfil.Amaterno;
			});
	}])

	.controller('AccordionDemoCtrl', [ '$http', '$rootScope', '$routeParams', '$scope', 'tiendaService', function($http, $rootScope, $routeParams, $scope, tiendaService){
		$scope.oneAtATime = true;
		console.log($scope.oneAtATime)

  		$scope.groups = [
    		{
      			title: 'Dynamic Group Header - 1',
      			content: 'Dynamic Group Body - 1'
    		},
    		{
      			title: 'Dynamic Group Header - 2',
      			content: 'Dynamic Group Body - 2'
    		}
  		];

  		$scope.items = ['Item 1', 'Item 2', 'Item 3'];

  		$scope.addItem = function() {
    		var newItemNo = $scope.items.length + 1;
    		$scope.items.push('Item ' + newItemNo);
  		};

	  		$scope.status = {
	    		isFirstOpen: true,
	    		isFirstDisabled: false
	  		};
  		$('[data-toggle="tooltip"]').tooltip()
	}])

	.controller('TabsController',['$scope', 'tiendaService', function($scope, tiendaService){
		$scope.tab = 0 

		$scope.selectTab = function (tab){
			$scope.tab = tab;
		};
		tiendaService.all().then( function (result){
 			$scope.todoPersona = result.data;
 			$scope.categorias = $scope.todoPersona.Categorias;
		});

	}])
})();




