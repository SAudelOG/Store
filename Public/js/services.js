(function (){
	angular.module('tienda.services', [])
		.factory('tiendaService', ['$http','$q', function ($http, $q){

			function all (){

				var deferred = $q.defer();

				$http.get('/data.json')
					.success(function (result){
						deferred.resolve(result);
				 	});
				return deferred.promise;
			}

			function byidCategoriaidSede (cid, tid){
				var deferred = $q.defer();

				all().then(function (result){
					var filtroCategoria = result.data.Categorias.filter(function (idCategoria){
						return idCategoria.cid === cid;
					});

				if (filtroCategoria.length > 0){

					var filtroTipo = filtroCategoria[0].Tipos.filter(function (idTipo){
						return idTipo.tid === tid;
					});

					if (filtroTipo.length > 0){
						deferred.resolve ({resultCategoria:filtroCategoria[0], resultTipo:filtroTipo[0]});
					} else{
						deferred.reject()
					}
				} else{
					deferred.reject();
				}					 
				});

				return deferred.promise;
			}

			function byidCategoria (cid){
				var deferred = $q.defer();

				all().then(function (result){
					var filtroCategoria = result.data.Categorias.filter(function (idCategoria){
						return idCategoria.cid === cid;
					});

					if (filtroCategoria.length > 0){
						deferred.resolve(filtroCategoria[0]);
					} else{
						deferred.reject();
					}
				});
				return deferred.promise;
			}

			/*Script fixed! */
			function Usr (uid){
				var deferred = $q.defer();

				$http.get('/perfiles.json')
					.success(function (result){
						var filtroUsr = result.data.filter( function (idusr){
							return idusr.uid === uid;
						})

						if (filtroUsr.length > 0){
							deferred.resolve(filtroUsr[0]);
						} else{
							deferred.reject();
						}
						
				 	});
				return deferred.promise;
			}
			
			return{
				all: all,
				byidCategoriaidSede: byidCategoriaidSede,
				byidCategoria: byidCategoria,
				Usr : Usr
			};
		}])
})();




