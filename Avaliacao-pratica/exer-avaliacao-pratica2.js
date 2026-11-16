/*
Próxima questão da avaliação
Agora vamos verificar outro ponto importante para o trabalho com APIs e React: transformar dados sem perder informações.
Imagine que você receba esta resposta de uma API:
*/

const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Monitor", preco: 900 }
];

/*
Você precisa criar um novo array contendo somente os produtos que custam mais de R$ 100, acrescentando uma propriedade precoComDesconto com desconto de 10%.
*/
function descotarProduto (preco) {
    return preco * 0.9
}

const produtosComDesconto = produtos.filter((produto) => produto.preco > 100).map((produto) => {
    const precoComDesconto = descotarProduto(produto.preco)

    return {
        ...produto,
        precoComDesconto
    }
})
