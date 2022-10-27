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

/* Perceba que a classe CarroEletrico não possui tanque de combustível */
export class CarroEletrico extends Veiculo {
    public acelerar(): void {
        // Implementa acelerar para moto
    }

    /* Perceba que o método "encherTanqueCombustivel" não faz sentido para um carro elétrico. 
    *  Ele está implementando na classe veículo, então esse existe para ele poder ser do tipo "Veiculo" também.
    */

    // Esse método só foi implementado para que o typescript não alegue nenhum erro.
    public encherTanqueCombustivel(): void {}

    public carregarBateria(): void {
        // Implementa carregamento da bateria
    }
}

console.log('\n\n--- Incorrect way to use LSP ---\n\n')