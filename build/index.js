"use strict";
// interface MovieObject {
//     name: string
//     description: string
//     author: string
//     theme: string
//     rate: number
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var movies = [];
var Movie = /** @class */ (function () {
    // movies: MovieObject[]
    function Movie() {
        // this.movies = []
    }
    Movie.prototype.getMovieByRate = function () {
        movies.push('teste');
    };
    return Movie;
}());
exports.Movie = Movie;
var movieObject = new Movie();
movieObject.getMovieByRate();
console.log(movies);
