angular.module('movieApp')

// .controller('popularController', function ($scope, $rootScope, movieService) {
.controller('popularController', function ($scope, movieService) {
  $scope.section = 'POPULAR'

  movieService.getPopularFilm()
  .then(function (oResponse) {
    console.log(oResponse)

    $scope.result = oResponse.data.results
    $scope.title = oResponse.data.results.title
    $scope.overview = oResponse.data.results.overview
  })
})
