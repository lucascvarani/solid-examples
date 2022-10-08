/* Perceba que existem diversas classes nesse arquivo. Isso não é uma boa prática, e foi feito apenas para exemplificar.
 * O ideal é construir cada classe em um arquivo diferente, e realizar um import na hora de utilizá-las.
*/

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


/* 
*  Perceba a quantidade de if-elses que existem no método abaixo, 
*  e que, caso "investimento" ser de outro tipo se não "FundosImobiliarios" ou "Acoes", 
*  esse método teria de ser alterado para inclusão desse novo tipo 
*/
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