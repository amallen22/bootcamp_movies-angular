angular.module('movieApp')

// .controller('popularController', function ($scope, $rootScope, movieService) {
.controller('popularController', function ($scope) {
  $scope.section = 'POPULAR'

  // $scope.$on('queryReady', function (e, data) {
  //   var query = data.query
  //   movieService.searchMovie(query)
  //        .then(function (response) {
  //        	console.log(response)

  //          // $scope.artists = response.data.artists.items
  //          // $scope.hidden = false
  //        })
  // })
})
