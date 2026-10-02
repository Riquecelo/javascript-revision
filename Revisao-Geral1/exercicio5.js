/* Exercício 5 — Ordenando produtos
Ordene:
A)Por preço crescente.
B)Por nome em ordem alfabética. */

const produtos = [
    { nome: "Mouse", preco: 150 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Teclado", preco: 300 },
    { nome: "Monitor", preco: 1200 }
];

produtos.sort((a,b) => a.preco - b.preco)

produtos.sort((a,b) => a.nome.localeCompare(b.nome))

console.log(produtos)

