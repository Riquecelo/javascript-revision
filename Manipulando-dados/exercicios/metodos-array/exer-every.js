//Exercício 1
//Use every() para verificar se todos os números são maiores que 5.


const numeros = [10, 20, 30, 40, 50];

const eMaior = numeros.every((numero) => numero > 5)

console.log(eMaior)


//Exercício 2
//verifique se todos os produtos possuem preço maior que 0

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Monitor", preco: 1200 }
];

const todosProdutosTemPreco = produtos.every((produto) => produto.preco > 0)

console.log(todosProdutosTemPreco)

/* 
Desafio 3 — raciocínio

Sem executar:

const produtos = [
    { nome: "Notebook", estoque: 5 },
    { nome: "Mouse", estoque: 10 },
    { nome: "Teclado", estoque: 0 },
    { nome: "Monitor", estoque: 8 }
];

const resultado = produtos.every((produto) => {
    return produto.estoque > 0;
});

Responda:

1. Qual será o valor de resultado? false.

2. Por que o every() retorna esse valor? Porque nem todos atendem a condição de verificação.

3. O every() retorna um array? Não, retorna um valor booleano, neste caso false.

4. Se quiséssemos saber apenas se existe algum produto sem estoque, qual usaríamos: some() ou every()? Neste caso o some() é o mais adequado.

5. Se quiséssemos obter todos os produtos sem estoque, qual usaríamos: filter() ou every()? Neste caso o filter() é ideal para selecionar os elementos qu atendem a condição.
*/