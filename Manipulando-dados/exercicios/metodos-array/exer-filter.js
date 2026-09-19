//Exercício 1
//Crie um filter() que retorne somente os números maiores que 15.
const numeros = [5, 10, 15, 20, 25, 30];

const numerosFiltrados = numeros.filter((numero) => numero > 15)
console.log(numerosFiltrados)

//Exercício 2
//crie um novo array que contenha somente os produtos que possuem estoque.
const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 150, estoque: 20 },
    { nome: "Teclado", preco: 400, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 8 },
    { nome: "Headset", preco: 300, estoque: 0 }
];

const produtosDisponiveis = produtos.filter((produto) => {
    return produto.estoque > 21
})

const exibirNoConsole = produtosDisponiveis.map((produto) => produto.nome)

console.log(produtosDisponiveis)
console.log('Produtos disponíveis \n', exibirNoConsole)


//Desafio 3
/* Analise este código sem executar:

const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.filter((numero) => {
    return numero >= 30;
});

Responda:

1. Qual será o valor de resultado? [30, 40, 50].

2. Por que 10 não entra? Porque não satisfaz a condição. 

3. Por que 30 entra? a nova condição permite a igualdade, por isso 30 entra.

4. O filter() modifica o array numeros? Não ele seleciona sem remover do original e cria um novo array como se fosse uma copia.
*/