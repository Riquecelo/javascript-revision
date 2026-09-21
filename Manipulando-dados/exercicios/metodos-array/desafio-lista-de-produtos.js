/* Desafio — Lista de produtos
1️⃣ Usando forEach()

Mostre no console:

Notebook - R$ 3500 - Estoque: 5
Mouse - R$ 150 - Estoque: 20
Teclado - R$ 300 - Estoque: 0
Monitor - R$ 1200 - Estoque: 8
2️⃣ Usando map()

Crie um novo array contendo somente os nomes dos produtos.

Resultado:

["Notebook", "Mouse", "Teclado", "Monitor"]
3️⃣ Usando map()

Crie um novo array onde cada produto seja transformado neste formato:

[
    "Notebook - R$ 3500",
    "Mouse - R$ 150",
    "Teclado - R$ 300",
    "Monitor - R$ 1200"
] */

const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 150, estoque: 20 },
    { nome: "Teclado", preco: 300, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 8 }
];

produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco} - Estoque: ${produto.estoque}`)
})

const nomeDosProdutos = produtos.map((produto) => produto.nome)
console.log('\n')
console.log(nomeDosProdutos)

const produtoEvalor = produtos.map((produto) => {
    return `${produto.nome} - R$ ${produto.preco}`
})

console.log('\n')
console.log(produtoEvalor)