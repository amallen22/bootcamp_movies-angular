angular.module('movieApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/upcoming', {
		// popular

  templateUrl: 'js/routes/upcoming/template.html',

        // definimos la ruta del controller
  controller: 'upcomingController'
})
})

// ruta ........=movies?api_token=35&sort=asc&....&....&
