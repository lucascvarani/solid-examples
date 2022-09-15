SRP (Single Responsibility Principle) -> Uma classe deve ter um, e somente um, motivo para mudar.
Perceba no código incorreto (incorrect.ts) que existe a classe "Movie".
Além disso, existe a variável "movies" com uma lista de filmes que irá simular uma tabela de filmes dentro de um banco de dados.
Nesta classe existem métodos responsáveis por seguirem regras de negócio, alterar e consultar banco de dados e fazer um papel de viewer, exibindo os dados.
Dessa forma, por ela possuir essas 3 tarefas, que são distintas uma das outras, ela não possui apenas um motivo para mudar, violando assim o princípio da responsabilidade única.

A correção desse problema foi implementada no código correto (correct.ts).
Agora existem 3 classes, cada uma com objectivos diferentes. Além disso, essas classes conversam entre sí para resolver o problema final.
A classe "Movie", responsável pelas regras de negócio, conversa com as classes de serviços externos: MovieRepository e MovieViewer.
Assim, cada uma dessas classes possuem apenas um motivo para mudar.
