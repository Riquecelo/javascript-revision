/* Exercício 2
Use map() para criar um novo array contendo somente os nomes:

["Tênis", "Camisa", "Calça"] 

Exercício 3
Use map() para criar um novo array contendo os preços com 10% de aumento.*/

const produtos = [
    { nome: "Tênis", preco: 200 },
    { nome: "Camisa", preco: 100 },
    { nome: "Calça", preco: 150 }
];


let nomeDeProdutos = produtos.map((produto) => {
    return produto.nome
})

let valor10Percent = produtos.map((produto) => {
    return  produto.preco + (produto.preco * 0.1)
})

console.log(nomeDeProdutos)
console.log(valor10Percent)