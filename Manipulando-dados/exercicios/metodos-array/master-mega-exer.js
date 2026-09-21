/* 🚀 MASTER MEGA EXERCÍCIO — Dia 1

Imagine que sua aplicação recebeu da API a seguinte lista de produtos: */

const produtos = [
    {
        nome: "Notebook Lenovo",
        preco: 3499.90,
        estoque: 5,
        categoria: "Eletrônicos"
    },
    {
        nome: "Mouse Logitech",
        preco: 149.90,
        estoque: 20,
        categoria: "Periféricos"
    },
    {
        nome: "Teclado Mecânico",
        preco: 399.90,
        estoque: 0,
        categoria: "Periféricos"
    },
    {
        nome: "Monitor LG",
        preco: 1299.90,
        estoque: 8,
        categoria: "Eletrônicos"
    },
    {
        nome: "Headset Gamer",
        preco: 299.90,
        estoque: 12,
        categoria: "Áudio"
    }
];

produtos.forEach((produto) => {
    console.log(`
    Produto: ${produto.nome}
    Preço: R$ ${produto.preco}
    Estoque: ${produto.estoque}
    Categoria: ${produto.categoria}
    --------------------------------`)
})

const nomeProdutos = produtos.map((produto) => produto.nome)

const precosProdutos = produtos.map((produto) => produto.preco)

const precosComAumento = produtos.map((produto) => {
    return produto.preco + (produto.preco * 0.1)
})


const descricaoProdutos = produtos.map((produto) => {
    return `${produto.nome} - ${produto.categoria} - R$ ${produto.preco} `
})

produtos.forEach((produto) => {
    if(produto.estoque > 0){
        console.log(`${produto.nome} -> Disponível`)
    }else{
        console.log(`${produto.nome} -> Sem estoque`)
    }
})

console.log(nomeProdutos)
console.log(precosProdutos)
console.log(precosComAumento)
console.log(descricaoProdutos)

const nomes = produtos.map((produto) => produto.nome)
// nomes = exibirá um novo array com os nomes 

const nomesForEach = produtos.forEach((produto) => produto.nome)
// nomesForEach = exibirá undefined

console.log(nomes)
console.log(nomesForEach)

/* 
Parte 8 — O desafio mais importante

Sem executar o código, analise:

const resultado = produtos.map((produto) => {
    console.log(produto.nome);
});

Responda:

1. O que será mostrado no console? Será mostrado o nome do produto
2. O que ficará dentro de resultado? O resultado ficarrá um array de undefined
3. Por que isso acontece? Isso acontece porque o callback não tem return definido implicitamente retorna undefined, e o método precisa do return para trabalhar
*/

const produtoComDesconto = produtos.map((produto) => {
    
    let valorComDesconto = produto.preco * 0.7
    if(produto.estoque > 0){
        return `Promocão: ${produto.nome} por apenas ${valorComDesconto}`
    }else{
        return `${produto.nome} sem estoque!`
    }
})

console.log(produtoComDesconto)