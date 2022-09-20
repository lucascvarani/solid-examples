export class FundosImobiliarios {
    public getAluguelMensal() {
        return 20
    }
}

export class Acoes {
    public getDividendoMensal() {
        return 25
    }
}

export class PagamentoMensal {
    public calcular(investimento: any) {
        if (investimento instanceof FundosImobiliarios) {
            return investimento.getAluguelMensal()
        } else if (investimento instanceof Acoes){
            return investimento.getDividendoMensal()
        }
    }
}

console.log('\n\n--- Incorrect way to use OCP ---\n\n')

const fundoImobiliario = new FundosImobiliarios()
const pagamentoMensal = new PagamentoMensal()
const calculoFundoImobiliario = pagamentoMensal.calcular(fundoImobiliario)
console.log('calculoFundoImobiliario:', calculoFundoImobiliario)