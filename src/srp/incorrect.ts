interface MovieObject {
    name: string
    description: string
    director: string
    theme: string
    rate: number
}

enum MovieEnum {
    NAME = 'name',
    DESCRIPTION = 'description',
    DIRECTOR = 'director',
    THEME = 'theme',
    RATE = 'rate',
  }

const movies: MovieObject[] = []

export class Movie {
    public getMovieByName(name: string) {
        return this.get(name, MovieEnum.NAME)
    }

    public getMovieByRate(rate: number) {
        return this.get(rate, MovieEnum.RATE)
        
    }

    public getMovieByTheme(theme: string) {
        return this.get(theme, MovieEnum.THEME)

    }

    public addMovie(movie: MovieObject) {
        this.add(movie)
    }

    public showMovies(movies: MovieObject[]) {
        this.print(movies)
    }

    public get(value: string | number, key: MovieEnum) {
        return movies.filter(m => m[key] === value)
    }

    public add(movie: MovieObject) {
        movies.push(movie)
    }

    public print(movies: MovieObject[]) {
        console.log(movies)
    }
}

console.log('\n\n--- Incorrect way to use SRP ---\n\n')

const movie = new Movie()
movie.addMovie({ name: 'The Batman', theme: 'Hero', rate: 7.9, director: 'Matt Reeves', description: 'Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.' })
let filteredMovies = movie.getMovieByTheme('Hero')
movie.showMovies(filteredMovies)
filteredMovies = movie.getMovieByTheme('Drama')
movie.showMovies(filteredMovies)