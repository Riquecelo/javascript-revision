//Exercício 1
//Use sort() para colocar os números em ordem crescente.


const numeros = [50, 10, 30, 20, 40];

numeros.sort((a,b) => a- b )

console.log(numeros)

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Teclado", preco: 300 },
    { nome: "Headset", preco: 450 }
];

//Ordenação por nome
produtos.sort((a,b) => a.nome.localeCompare(b.nome))

console.log(produtos)

//ordenação por preço do menosr para o maior
produtos.sort((a,b) => a.preco - b.preco)

console.log(produtos)
