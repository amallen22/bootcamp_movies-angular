angular.module('movieApp')
 .controller('SearchMovieController', function ($scope) {
 // .controller('SearchMovieController', function ($scope, $rootScope) {

   // $scope.movieQuery = 'alien'

   $scope.searchMovie = function () {
     // var data = { query: $scope.movieQuery }

     console.log($scope.movieQuery)

     // $rootScope.$broadcast('queryReady', data)
     // $rootScope.status = 'queryReady'
   }
 })
