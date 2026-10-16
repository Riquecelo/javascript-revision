//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 2: Composição de funções com produtos

function aplicarDesconto(preco) {
    return preco * 0.8;
}

function adicionarFrete(preco) {
    return preco + 15;
}

function calcularPrecoFinal(produto) {
    return adicionarFrete(aplicarDesconto(produto.preco));
}

const produto = {
    nome: "Teclado",
    preco: 200
};

console.log(calcularPrecoFinal(produto));

/*
Sua tarefa
Sem executar o código, responda:
1. Qual valor aplicarDesconto() retorna para o teclado?
R= 160
2. Qual valor adicionarFrete() recebe?
R = 160
3. Qual é o preço final do teclado?
R = 175
4. Por que calcularPrecoFinal() recebe o objeto produto, mas passa um número para as outras funções?
R= porque esta passando o valor da propriedade preco(produto.preco)
*/

/* 
Perceba que calcularPrecoFinal() recebe o objeto completo, mas acessa apenas produto.preco para iniciar o cálculo. Assim, as outras funções trabalham somente com o dado de que precisam: o preço.
Essa separação é útil no frontend porque cada função pode ter uma responsabilidade específica, facilitando testes e manutenção.
*/