angular.module('movieApp')
 .controller('SearchMovieController', function ($scope, $rootScope) {
 // .controller('SearchMovieController', function ($scope, $rootScope) {

   $scope.movieQuery = 'alien'

   $scope.searchMovie = function () {
     var data = { query: $scope.movieQuery }

    // console.log(data)

     $rootScope.$broadcast('queryReady', data)
    // $rootScope.status = 'queryReady'
   }
 })
