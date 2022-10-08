/* Perceba que existem diversas classes nesse arquivo. Isso não é uma boa prática, e foi feito apenas para exemplificar.
 * O ideal é construir cada classe em um arquivo diferente, e realizar um import na hora de utilizá-las.
*/

const cachorro = { peso: 10, patas: 4 }
const baleia = { peso: 10 }

/* Essa classe assume que todos os mamíferos irãm possuir peso e patas */

interface Mamiferos {
    setPeso: (peso: number) => void
    setPatas: (patas: number) => void
}

export class Cachorro implements Mamiferos {
    public setPeso(peso: number): any {
        cachorro.peso = peso
    }

    public setPatas(patas: number): any {
        cachorro.patas = patas
    }
}

export class Baleia implements Mamiferos {
    public setPeso(peso: number): any {
        baleia.peso = peso
    }


    /* Perceba que, como baleias não possuem patas, e sim nadadeiras, esse método não faz sentido */
    public setPatas(patas: number): any {
        // Não faz nada
    }
}

console.log('\n\n--- Incorrect way to use ISP ---\n\n')