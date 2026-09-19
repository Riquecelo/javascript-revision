//Exercício 1
//Use find() para encontrar o primeiro número maior que 18.

const numeros = [5, 10, 15, 20, 25, 30];

const maiorQue18 = numeros.find((numero) => numero > 18)

console.log(maiorQue18)


//Exercício 2
//Encontre o produto que possui: id -> 3

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Monitor", preco: 1200 },
    { id: 4, nome: "Teclado", preco: 400 }
];

const produtoEncontrado = produtos.find((produto) => produto.id === 3)

console.log(produtoEncontrado)

/* Desafio 3
Sem executar o código, diga o resultado de cada um:

const numeros = [10, 20, 30, 40, 50];

const resultadoFilter = numeros.filter((numero) => {
    return numero >= 30;
});

const resultadoFind = numeros.find((numero) => {
    return numero >= 30;
});

Responda:

resultadoFilter = [30,40,50]

resultadoFind = 30

E explique por que os resultados são diferentes. 

R = O filter busca e seleciona todos que satisfaçam a condição. Já o find ele para no primeiro que satisfaça a condição.
*/