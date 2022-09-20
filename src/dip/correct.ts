interface MovieObject {
    id: number
    name: string
    director: string
}

let movies: MovieObject[] = [{ id: 1, name: 'The Batman', director: 'Matt Reeves' }, { id: 2, name: 'Homem-Aranha', director: 'Sam Raimi' }]

interface MovieRepositoryInterface {
    setName: (id: number, name: string) => void
    setDirector: (id: number, director: string) => void
}

export class MovieRepository implements MovieRepositoryInterface {
    public setName(id: number, name: string): void {
        movies = movies.map(m => {
            const newMovie = m
            if (m.id === id) newMovie.name = name
            return newMovie
        })
    }

    public setDirector(id: number, director: string): any {
        movies = movies.map(m => {
            const newMovie = m
            if (m.id === id) newMovie.director = director
            return newMovie
        })
    }
}

export class Movie {
    movieRepository: MovieRepositoryInterface
    constructor(movieRepository: MovieRepositoryInterface) {
        this.movieRepository = movieRepository
    }

    setName(id: number, name: string) {
        this.movieRepository.setName(id, name)
    }

    setDirector(id: number, director: string) {
        this.movieRepository.setName(id, director)
    }
}

const movieRepository = new MovieRepository()
const movie = new Movie(movieRepository)

movie.setName(1, 'The Batman 2')
movie.setName(2, 'Homem Aranha 2')

console.log('\n\n--- Correct way to use DIP ---\n\n')
console.log('Movies:', movies)