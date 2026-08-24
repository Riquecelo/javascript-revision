/*
🛒 Exercício: Gerenciador de produtos de um e-commerce

Imagine que você trabalha como desenvolvedor Front-End em uma loja virtual.

O time de Back-End ainda não está pronto, então você recebeu uma lista de produtos simulada e precisa criar algumas funções para manipular esses dados.

Você deverá utilizar obrigatoriamente:

✅ Função nomeada
✅ Função anônima
✅ Arrow function
✅ Função construtora
✅ Callback
✅ Parâmetros e retorno
✅ Métodos básicos de array, como filter, map, forEach e find
*/

/*
🧩 1. Dados iniciais

Comece com estes produtos:
*/
const produtos = [
    {
        nome: "Camiseta Nike",
        preco: 120,
        estoque: 10,
        categoria: "Roupas"
    },
    {
        nome: "Tênis Adidas",
        preco: 350,
        estoque: 5,
        categoria: "Calçados"
    },
    {
        nome: "Boné Puma",
        preco: 80,
        estoque: 0,
        categoria: "Acessórios"
    },
    {
        nome: "Jaqueta Nike",
        preco: 450,
        estoque: 3,
        categoria: "Roupas"
    }
];

/*
🎯 Desafio 1 — Função nomeada

Crie uma função nomeada chamada calcularDesconto.

Ela deve receber:
produto
percentualDesconto

E retornar o preço do produto com desconto.
*/

function calcularDesconto(produto, desconto) {
    let valorDoDesconto = produto.preco * (desconto / 100);
    //let porcent = desconto/100
    console.log('Porcentagem de desconto: ', (desconto / 100) * 100, '%')
    console.log('valorDoDesconto: R$', valorDoDesconto)
    let produtoComDesconto = produto.preco - valorDoDesconto

    return `O valor do produto com desconto é R$ ${produtoComDesconto}`
}

console.log(calcularDesconto(produtos[0], 10))

/*
🎯 Desafio 2 — Arrow Function

Agora crie uma arrow function chamada produtoDisponivel.

Ela deve receber um produto e retornar:
true se houver estoque;
false se o estoque for 0;
*/

let produtoDisponivel = (produto) => {
    return `O produto tem estoque? ${produto.estoque > 0}`
}

console.log(produtoDisponivel(produtos[0]))

/*
🎯 Desafio 3 — Callback

Agora vamos simular uma situação muito comum no Front-End.

Você precisa criar uma função chamada: processarProdutos
Ela deverá receber dois parâmetros:produtos e callback.
Onde o callback será uma função que você passa para processarProdutos.
🧠 O ponto principal desse desafio

Entenda quem é quem:

processarProdutos
       │
       ├── recebe produtos
       │
       └── recebe callback
                    │
                    ▼
             função executada
             para cada produto

Aqui você estará praticando uma das ideias mais importantes do JavaScript:

Uma função pode receber outra função como parâmetro.
*/

function processarProdutos(produtos, callback) {
    produtos.forEach(function(produto){
        callback(produto)
    })
    /* for(let i = 0; i < produtos.length; i++){
        callback(produtos[i])
    } */
}

processarProdutos(produtos, function(produto){
    console.log(produto.nome)
})

/*
🎯 Desafio 4 — Função anônima

Agora utilize uma função anônima para descobrir quais produtos estão disponíveis.

Você deverá utilizar sua função processarProdutos.
*/

processarProdutos(produtos, function(produto){
    if(produto.estoque > 0){
        console.log(`Produto disponível: ${produto.nome}`)
    }
})

/*
🎯 Desafio 5 — Arrow Function + Callback

Agora faça a mesma coisa do desafio anterior, mas utilizando uma arrow function como callback.

O objetivo aqui é você perceber que: função anônima e arrow function podem exercer o mesmo papel.
*/

processarProdutos(produtos, (produto)=>{
    console.log('Categoria: ', produto.categoria )
})