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