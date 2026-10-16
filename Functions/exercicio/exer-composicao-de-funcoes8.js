//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 8 — Composição com objetos


function aplicarDesconto(produto) {
    return {
        ...produto,
        preco: produto.preco * 0.9
    };
}

function adicionarFrete(produto) {
    return {
        ...produto,
        preco: produto.preco + 15
    };
}

function calcularProduto(produto) {
    return adicionarFrete(aplicarDesconto(produto));
}

const produto = {
    nome: "Teclado",
    preco: 200
};

console.log(calcularProduto(produto));

/*
Antes de responder, observe duas coisas:
- aplicarDesconto() devolve um objeto novo com o preço atualizado.
- adicionarFrete() recebe o objeto devolvido pela função anterior e também devolve um objeto novo.

Sua vez: sem executar o código, responda:
1. Qual objeto aplicarDesconto() retorna?
R= produto = {
    nome: "Teclado",
    preco: 180
};
2. Qual objeto adicionarFrete() recebe?
R= produto = {
    nome: "Teclado",
    preco: 180
};
3. Qual objeto calcularProduto() retorna?
R= produto = {
    nome: "Teclado",
    preco: 195
};
4. O objeto original produto terá seu preço alterado? Por quê?
R= Não, Porque não esta sendo feita nem uma atribuição ou outro tipo de manipulação no objeto principal, mas sim uma exibição do resultado no console.

R=Na verdade, existe uma atribuição à propriedade preco dentro de cada novo
*/
