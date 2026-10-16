//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.

//Exercício 1: Entendendo a composição

function aplicarDesconto(preco) {
    return preco * 0.9;
}

function adicionarFrete(preco) {
    return preco + 20;
}

function calcularPrecoFinal(preco) {
    return adicionarFrete(aplicarDesconto(preco));
}

console.log(calcularPrecoFinal(100));

/*
Sua tarefa é responder às quatro perguntas:
1. Qual valor aplicarDesconto(100) retorna? R= 90
2. Qual valor adicionarFrete() recebe quando é chamada dentro de calcularPrecoFinal()? R= recebe 100
3. Qual é o resultado final exibido no console? R=110
4. Por que podemos dizer que calcularPrecoFinal() combina duas funções? R= potque esta invocando duas funções de maneira aninhada
*/