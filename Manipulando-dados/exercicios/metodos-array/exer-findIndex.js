//Exercício 1
//Use findIndex() para encontrar o índice do número 40.

const numeros = [10, 20, 30, 40, 50];

const indiceEncontrado = numeros.findIndex((numero) => numero === 40)

console.log(indiceEncontrado)

//Exercício 2
//Encontre o índice do produto cujo id é 3

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Monitor", preco: 1200 },
    { id: 4, nome: "Teclado", preco: 400 }
];

const indiceProduto = produtos.findIndex((produto) => produto.id === 3)

console.log(indiceProduto)


/* 
Desafio 3 — raciocínio

Sem executar:

const produtos = [
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Mouse" },
    { id: 3, nome: "Monitor" },
    { id: 4, nome: "Teclado" }
];

const indice = produtos.findIndex((produto) => {
    return produto.nome === "Teclado";
});

Responda:

1. Qual será o valor de indice? 3

2. Por que não será 4? Porque a contagem dos índices inicia-se com 0, por isso o teclado tem o índice 3

3. O que aconteceria se procurássemos: produto.nome === "Headset"? Não será encontrado e o retorno será -1 indicando um índice que não existe no array

4. Qual é a principal diferença entre find() e findIndex()? O find retorna o elemento e o findIndex retorna o índice do elemento

*/ 