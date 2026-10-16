//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 9 — um pequeno desafio

function aumentarPreco(produto) {
    return {
        ...produto,
        preco: produto.preco + 50
    };
}

function dobrarPreco(produto) {
    return {
        ...produto,
        preco: produto.preco * 2
    };
}

function transformarProduto(produto) {
    return dobrarPreco(aumentarPreco(produto));
}

const produto = {
    nome: "Mouse",
    preco: 100
};


/*
Sem executar o código, responda:
1. Qual objeto aumentarPreco() retorna?
R= produto = {
    nome: "Mouse",
    preco: 150
};
2. Qual preço dobrarPreco() recebe? R= 150
3. Qual objeto transformarProduto(produto) retorna?
R= produto = {
    nome: "Mouse",
    preco: 300
};
4. Qual será o preço de produto.preco depois da chamada? Explique por quê.
R= Continuará sendo 100, porque o objeto produto não foi modificado, os objetos gerados pelas funções sim, esse foram alterados.
*/