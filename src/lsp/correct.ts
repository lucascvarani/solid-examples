interface PremiosGanhos {
    premios: string[]
    premiosDoOscar: string[]
}

export class Movie {
    public getPremios(): PremiosGanhos {
        return { premios: ['Globo de Ouro', 'Screen Actors Guild'], premiosDoOscar: [] }
    }
}

export class OscarMovie extends Movie {
    public getPremios(): PremiosGanhos {
        return { premios: ['Globo de Ouro', 'Screen Actors Guild', 'Oscar'], premiosDoOscar: ['Melhor Filme', 'Melhor Diretor', 'Melhor Ator'] }
    }
}

export class Premios {
    public listaPremios(movie: Movie) {
        return movie.getPremios()
    }
}

console.log('\n\n--- Incorrect way to use LSP ---\n\n')

const movie = new Movie()
const oscarMovie = new OscarMovie()
const premios = new Premios()
const listaDePremiosMovie = premios.listaPremios(movie)
const listaDePremiosOscarMovie = premios.listaPremios(oscarMovie)

console.log('listaDePremiosMovie:', listaDePremiosMovie)
console.log('listaDePremiosOscarMovie:', listaDePremiosOscarMovie)