const cachorro = { peso: 10, patas: 4 }
const baleia = { peso: 10 }

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

    public setPatas(patas: number): any {
        // Não faz nada
    }
}

console.log('\n\n--- Incorrect way to use ISP ---\n\n')