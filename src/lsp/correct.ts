/* Perceba que existem diversas classes nesse arquivo. Isso não é uma boa prática, e foi feito apenas para exemplificar.
 * O ideal é construir cada classe em um arquivo diferente, e realizar um import na hora de utilizá-las.
*/

export class Veiculo {

    /* Método que acelera veículo */
    public acelerar(): void {
        // Implementação para acelerar o veículo
    }

    /* Método que é responsável por encher o tanque de combustível */
    encherTanqueCombustivel(): void {
        // Implementação para encher o tanque de combustível
    }
}

export class VeiculoEletrico {
     /* Método que acelera veículo */
     public acelerar(): void {
        // Implementação para acelerar o veículo
    }

    /* Método que é responsável por encher o tanque de combustível */
    carregarBateria(): void {
        // Implementação para encher o tanque de combustível
    }
}

export class Moto extends Veiculo {
    public acelerar(): void {
        // Implementa acelerar para moto
    }

    public encherTanqueCombustivel(): void {
        // Implementação para encher o tanque de combustível para moto
    }

    public empinar(): void {
        // Implementa empinar para moto
    }
}

export class Onibus extends Veiculo {
    public acelerar(): void {
        // Implementa acelerar para onibus
    }

    public encherTanqueCombustivel(): void {
        // Implementação para encher o tanque de combustível para onibus
    }

    public girarCatraca(): void {
        // Implementa girar a catraca do ônibus
    }
}

export class CarroEletrico extends VeiculoEletrico {
    public acelerar(): void {
        // Implementa acelerar para carro elétrico
    }

    public carregarBateria(): void {
        // Implementa carregamento da bateria
    }
}

console.log('\n\n--- Correct way to use LSP ---\n\n')