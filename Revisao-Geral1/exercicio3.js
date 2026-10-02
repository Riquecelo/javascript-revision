/* Exercício 3 — Carrinho de compras
Um usuário adicionou:
    "Notebook",
    "Mouse",
    "Teclado"

Faça as seguintes operações:

Adicione "Headset" no final.
Adicione "Monitor" no início.
Remova o primeiro produto.
Remova o último produto.
Inverta a ordem atual do carrinho.

Importante: faça as operações sequencialmente.
Não recrie o array a cada etapa. */

let carrinho = [
    "Notebook",
    "Mouse",
    "Teclado"
];

carrinho.push("Headset")
carrinho.unshift("Monitor")
carrinho.shift()
carrinho.pop()
carrinho.reverse()

console.log(carrinho)