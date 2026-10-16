//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 4 — filter() + map() + composição

function aplicarDesconto(preco) {
    return preco * 0.9;
}

function adicionarFrete(preco) {
    return preco + 10;
}

function calcularPrecoFinal(produto) {
    return adicionarFrete(aplicarDesconto(produto.preco));
}

const produtos = [
    { nome: "Livro", preco: 50 },
    { nome: "Fone", preco: 200 },
    { nome: "Cadeira", preco: 500 }
];

/* 
As funções aplicarDesconto(), adicionarFrete() e calcularPrecoFinal() continuam iguais às dos exercícios anteriores.
Sua tarefa: crie uma variável chamada produtosPromocionais que contenha apenas os produtos cujo preço final seja inferior a R$ 200.
Cada objeto do resultado deve preservar as propriedades originais e receber a propriedade precoFinal.
Requisitos:
- Use filter() para selecionar os produtos.
- Use map() para transformar os produtos selecionados.
- Use calcularPrecoFinal() para calcular os preços.
- Preserve os objetos originais usando spread.
*/

const produtosPromocionais = produtos.filter((produto) => calcularPrecoFinal(produto) < 200).map((produto) => {
    return {
        ...produto,
        precoFinal: calcularPrecoFinal(produto)
    }
})

console.log(produtos)
console.log(produtosPromocionais)