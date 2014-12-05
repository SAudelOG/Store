(function (){
	var app = angular.module('SportEvents', [
			'ngRoute',
			'tienda.controllers',
			'Tienda.directives',
			'tienda.services',
			'ui.bootstrap'
		]);

	app.config(['$routeProvider', function ($routeProvider){

		$routeProvider
			.when ('/',{
				templateUrl: 'views/personalFeed.html',
				controller: 'tiendaTodoController',
			})
			.when('/filtrocategoria/:cid',{
				templateUrl: 'views/filtroCategoria.html',
				controller: 'filtroCategoriaController',
			})
			.when ('/miperfil/uid/:uid',{
				templateUrl: 'views/perfil.html',
				controller: 'perfilController',	
			})
			.when ('/categoria/:cid/tipo/:tid',{
				templateUrl: 'views/tipo.html',
				controller:'CategoriaTipoController',
			})
			.when ('/pruebas', {
				templateUrl: 'views/bootstrap.html',
				controller: 'AccordionDemoCtrl'
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);
})(); 