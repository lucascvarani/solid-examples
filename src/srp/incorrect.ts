interface Item {
    id: number
    name: string
    description: string
    price: number
}

let items: Item[] = []

/**
 ** A classe "CarrinhoSupermercado" é responsável por 
 ** adicionar, remover e ainda calcular o preço dos ítens do carrinho 
**/
export class CarrinhoSupermercado {
    adicionaItem(item: Item) {
        items.push(item)
    }

    removeItem(item: Item) {
        items = items.filter(i => i.id != item.id)
    }

    calculaPrecoFinal() {
          return items.reduce(function (acc, obj) { return acc + obj.price; }, 0);
    }
}

console.log('\n\n--- Incorrect way to use SRP ---\n\n')

const carrinhoSupermercado = new CarrinhoSupermercado()
carrinhoSupermercado.adicionaItem({ id: 0, name: 'Açúcar', description: "Açúcar refinado", price: 10 })
carrinhoSupermercado.adicionaItem({ id: 1, name: 'Sal', description: "Sal grosso para churrasco", price: 15 })
const preco = carrinhoSupermercado.calculaPrecoFinal()
console.log('Ítens:')
console.log(items)
console.log('Preco final:', preco)