/* Perceba que existem diversas classes nesse arquivo. Isso não é uma boa prática, e foi feito apenas para exemplificar.
 * O ideal é construir cada classe em um arquivo diferente, e realizar um import na hora de utilizá-las.
*/

interface Investimento {
    getRetornoMensal: () => number
}

export class FundosImobiliarios implements Investimento {
    public getRetornoMensal() {
        return 20
    }
}

export class Acoes implements Investimento {
    public getRetornoMensal() {
        return 25
    }
}

/* Agora que sabemos o tipo que recebmos, podemos garantir que ele possui o método "getRetornoMensal", então basta chamá-lo para calular. */

export class PagamentoMensal {
    public calcular(investimento: Investimento) {
       return investimento.getRetornoMensal()
    }
}

console.log('\n\n--- Correct way to use OCP ---\n\n')

const fundoImobiliario = new FundosImobiliarios()
const pagamentoMensal = new PagamentoMensal()
const calculoFundoImobiliario = pagamentoMensal.calcular(fundoImobiliario)
console.log('calculoFundoImobiliario:', calculoFundoImobiliario)