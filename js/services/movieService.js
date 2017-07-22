angular.module('movieApp')

.factory('movieService', function ($http) {
  function getPopularFilm (query) {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=835605dce55259fcb74c6103cf021c90&language=en-US&page=1'

    // console.log(url)

   // return $http.get(url)
  }
  // return {
  // 	getPopularFilm: getPopularFilm
  // }
})
