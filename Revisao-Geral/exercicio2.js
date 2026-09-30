/* Exercício 2 — Relatório financeiro
O gerente pediu:
“Preciso saber quanto vale todo o estoque da loja.”

Calcule o valor total armazenado no estoque.
Exemplo:
Notebook → 3500 × 5
Mouse → 150 × 10 

Considere:*/

const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 150, estoque: 10 },
    { nome: "Teclado", preco: 300, estoque: 4 },
    { nome: "Monitor", preco: 1200, estoque: 3 }
];

const valoresTotalProdutos = produtos.map((produto) => {
   return produto.estoque * produto.preco
})

const valorTotal = valoresTotalProdutos.reduce((acumulador, numero) => {
    return acumulador + numero
},0)

console.log(valorTotal)