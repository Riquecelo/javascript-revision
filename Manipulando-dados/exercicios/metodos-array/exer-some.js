//Exercício 1
//Use some() para descobrir se existe algum número maior que 20.

const numeros = [5, 10, 15, 20, 25];

const resultado = numeros.some((numero) => numero > 20)

console.log(resultado)

//Exercício 2
//que descubra se existe algum produto com estoque 0.

const produtos = [
    { nome: "Notebook", estoque: 5 },
    { nome: "Mouse", estoque: 20 },
    { nome: "Teclado", estoque: 0 },
    { nome: "Monitor", estoque: 8 }
];

const existeProdutoSemEstoque = produtos.some((produto) => produto.estoque == 0)

console.log(existeProdutoSemEstoque)


/* 
Desafio 3 — raciocínio

Sem executar:

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Monitor", preco: 1200 }
];

const resultado = produtos.some((produto) => {
    return produto.preco > 5000;
});

Responda:

1. Qual será o valor de resultado? false

2. Por quê? A condição não será satisfeita

3. O some() retorna um array? não, retorna um valor booleano

4. Se quiséssemos obter os produtos com preço maior que 500, qual método usaríamos: some(), filter() ou find()?

Como produtos está no plural vou considerar que são todos maiores que 500, com isso usaria o filter()

*/