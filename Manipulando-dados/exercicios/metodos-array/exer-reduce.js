//Primeiro exercício
//Complete o código para descobrir o total:

const numeros = [5, 10, 15, 20];

const total1 = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
}, 0);

console.log(total1);

const produtos1 = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Teclado", preco: 300 }
];

const total2 = produtos1.reduce((acumulador, produto) => {
    return acumulador + produto.preco
},0)

console.log(total2)

const produtos = [
    { nome: "Notebook", quantidade: 2 },
    { nome: "Mouse", quantidade: 3 },
    { nome: "Teclado", quantidade: 1 }
];

const totalProdutos = produtos.reduce((acumulador,produto) => acumulador + produto.quantidade,0)
console.log(totalProdutos)


const numeros2 = [10, 20, 30];

const total = numeros2.reduce((acumulador, numero) =>  acumulador + numero, 0);

console.log(total);