//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 2 — Composição com uma regra condicional

function aplicarDesconto(preco) {
    return preco * 0.9;
}

function adicionarFrete(preco) {
    return preco + 15;
}

function aplicarTaxa(preco) {
    if (preco > 100) {
        return preco + 10;
    }

    return preco;
}

function calcularPrecoFinal(preco) {
    return aplicarTaxa(adicionarFrete(aplicarDesconto(preco)));
}

console.log(calcularPrecoFinal(120));


/*
Quanto retorna aplicarDesconto(120)?

Qual valor adicionarFrete() recebe e quanto retorna?

O valor que chega a aplicarTaxa() é maior que 100? Qual será o retorno dela?

Qual será o resultado final de calcularPrecoFinal(120)?
*/
