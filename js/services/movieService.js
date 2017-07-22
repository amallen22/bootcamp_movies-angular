angular.module('movieApp')

.factory('movieService', function ($http) {
  // function getPopularFilm (query) {

  function getPopularFilm () {
    var token = '3e8bb211bfde5d15ec1dfa259f575ce9'
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + token

    return $http.get(url)
  }

  return {
    getPopularFilm: getPopularFilm
  }
})
