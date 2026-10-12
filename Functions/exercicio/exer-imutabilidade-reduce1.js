//Imutabilidade = não alterar diretamente o dado original.

//Exercício 1 — Somando preços de produtos

const produtos = [
    { nome: "Notebook", preco: 4000 },
    { nome: "Mouse", preco: 200 },
    { nome: "Monitor", preco: 1500 }
];

/*
Sua tarefa é criar uma variável chamada valorTotal que contenha a soma dos preços de todos os produtos, utilizando reduce().
Requisitos:
1. O resultado deve ser 5700.
2. Utilize o acumulador e o objeto produto.
3. Não altere o array original.
*/

const valorTotal = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco
},0)

console.log(valorTotal)
