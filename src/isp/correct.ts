/* Perceba que existem diversas classes nesse arquivo. Isso não é uma boa prática, e foi feito apenas para exemplificar.
 * O ideal é construir cada classe em um arquivo diferente, e realizar um import na hora de utilizá-las.
*/

const cachorro = { peso: 10, patas: 4 }
const baleia = { peso: 10 }

/* Essa classe, por sua vez, garante apenas que todos os mamíferos terão um peso */

interface Mamiferos {
    setPeso: (peso: number) => void
}

/* Já essa classe, garante apenas que todos os mamíferos com patas terão patas */

interface MamiferosComPatas extends Mamiferos {
    setPatas: (patas: number) => void
}

export class Cachorro implements MamiferosComPatas {
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
}

console.log('\n\n--- Correct way to use ISP ---\n\n')