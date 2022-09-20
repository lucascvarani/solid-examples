OCP (Open-Closed Principle) -> Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.
Perceba que no código incorreto (incorrect.ts), existem classes para tipos de investimento: Fundos Imobiliarios e Ações
E cada classe possui um método próprio que calcula o rendimento de determinado investimento: getAluguelMensal e getDividendoMensal, respectivamente.
Ao final existe uma classe responsável pelo calculo dos rendimentos de determinado investimento, a classe PagamentoMensal, que possui o método calcular.

Pense no seguinte cenário: Imagine que nós queremos adicionar mais um investimento, o CDB de um banco, e também queremos construir um método para calular seu rendimento mensal. Além disso, queremos incluir ele também no retorno do método "calcular" da classe PagamentoMensal.
Para isso, teríamos que incluir mais um if else dentro desse método, verificando se tal investimento é um CDB de um banco, para chamar o método correto.

Isso, então, fere o Open-Closed Principle, uma vez que teríamos que alterar o método da classe PagamentoMensal.

Agora, olhando para o código correto (correct.ts), vemos um exemplo que segue o OCP.
É criada uma interface chamada Investimento com o método getRetornoMensal, e todas as classes de investimentos implementam ela.
Dessa forma, todas essas classes precisam implementar esse método getRetornoMensal.
Nesse caso, o método calcular da classe PagamentoMensal pode garantir que todos objetos recebidos (que serão do tipo Investimento) implementarão o método getRetornoMensal, já que é obrigatório.
Dessa forma, para adicionarmos o CDB de um banco, bastaria criar uma classe chamada CDB que implementa a interface Investimento, contendo, assim, o método obrigatório getRetornoMensal. Fazendo isso, nenhuma alteração terá que ser realizada na classe PagamentoMensal.
