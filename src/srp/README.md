SRP (Single Responsibility Principle) -> Uma classe deve ter um, e somente um, motivo para mudar.
Perceba que no código incorreto (incorrect.ts) existe a classe "CarrinhoSupermercado".
Além disso, existe a variável "items" com uma lista de ítens que irá simular uma tabela de ítens dentro de um banco de dados.
Nesta classe existem métodos responsáveis por adicionar ítens ao carrinho, remover, e ainda calcular o preço desses ítens.
Dessa forma, se a forma como adiona e remove ítens mudar, ou se a forma que calcula o preço dos ítens mudar (cálculo diferente de imposto, por exemplo) ela não possui apenas um motivo para mudar, violando assim o princípio da responsabilidade única.

A correção desse problema foi implementada no código correto (correct.ts).
Agora existem 2 classes, cada uma com objectivos diferentes. Uma delas cuida do contéudo do carrinho apenas, e outra, a "Checkout", cuida de calcular o preço dos ítens.