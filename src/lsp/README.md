LSP (Liskov Substitution Principle) -> Se para cada objeto o1 do tipo S há um objeto o2 do tipo T de forma que, para todos os programas P definidos em termos de T, o comportamento de P é inalterado quando o1 é substituído por o2 então S é um subtipo de T.
Em outras palavras o princípio da substituição de Liskov diz que, se A é subtipo de B, então os objetos instanciados de B podem ser substituidos pelos objetos instanciados de A sem que haja complicações no programa.

Perceba que no código incorreto (incorrect.ts), existe a classe Movie e a classe MovieOscar, que extende a classe Movie. Dessa forma, a classe MovieOscar é um subtipo da classe Movie.
Existe também a classe Premios, que contém um método para listagem dos prêmios de determinado filme.
Perceba que ao passar para o método listaPremios o objeto do tipo Movie ele retorna um objeto que contém a listagem de premios apenas.
Porém, ao passar para o método listaPremios um objeto do tipo OscarMovie ele retorna um objeto que contém tanto a listagem de prêmios quanto a listagem de  prêmios específicos do oscars o filme ganhou.
Ao fazer isso, o princípio da substituição de liskov é violado, pois são retornados objetos difentes ao passar como parâmetro para o método listaPremios um objeto do tipo Movie e do tipo OscarMovie (subtipo de Movie). Ou seja, retornos diferentes não são permitidos nesse caso.

Agora, já no código correto (correct.ts) existe uma interface que dita o que o método listaPremios retorna, e, também, o método listaPremios só permite receber o tipo Movie como parâmetro. Além disso, o subtipo de Movie, o OscarMovie, continua possuindo o método getPremios retornando a lista de oscars, entretanto seu tipo pai, Movie, também retorna essa lista. Dessa forma, como os retornos são iguais, o princípio da substituição de liskov é respeitado.



