angular.module('movieApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/', {
		// popular

  templateUrl: 'js/routes/popular/template.html',

        // definimos la ruta del controller
  controller: 'popularController'
})
})

// ruta ........=movies?api_token=35&sort=asc&....&....&
