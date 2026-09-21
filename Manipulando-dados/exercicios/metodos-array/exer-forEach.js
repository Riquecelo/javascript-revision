/* Exercício 1

Use forEach() para imprimir no console uma frase para cada produto:

Produto: Tênis - R$ 200
Produto: Camisa - R$ 100
Produto: Calça - R$ 150 */

const produtos = [
    { nome: "Tênis", preco: 200 },
    { nome: "Camisa", preco: 100 },
    { nome: "Calça", preco: 150 }
];

produtos.forEach((produto) => {
    console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`)
})