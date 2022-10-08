/* Perceba que existem diversas classes nesse arquivo. Isso não é uma boa prática, e foi feito apenas para exemplificar.
 * O ideal é construir cada classe em um arquivo diferente, e realizar um import na hora de utilizá-las.
*/

interface Item {
    id: number
    name: string
    description: string
    price: number
}
/** A variável "items" representa nossos registros no banco de dados **/
let items: Item[] = []

export class CarrinhoSupermercado {
    adicionaItem(item: Item) {
        items.push(item)
    }

    removeItem(item: Item) {
        items = items.filter(i => i.id != item.id)
    }
}

/** Há agora uma classe totalmente responsável por todos os processos de finalização de compras **/
export class Checkout {
    calculaPrecoFinal() {
          return items.reduce(function (acc, obj) { return acc + obj.price; }, 0);
    }
}

console.log('\n\n--- Correct way to use SRP ---\n\n')

const carrinhoSupermercado = new CarrinhoSupermercado()
const checkout = new Checkout()
carrinhoSupermercado.adicionaItem({ id: 0, name: 'Açúcar', description: "Açúcar refinado", price: 10 })
carrinhoSupermercado.adicionaItem({ id: 1, name: 'Sal', description: "Sal grosso para churrasco", price: 15 })
const preco = checkout.calculaPrecoFinal()
console.log('Ítens:')
console.log(items)
console.log('Preco final:', preco)