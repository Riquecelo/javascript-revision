//Imutabilidade = não alterar diretamente o dado original.

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10
};

const copiaProduto = {
    ...produto
};

copiaProduto.preco = 3000;

console.log(produto.preco);
console.log(copiaProduto.preco);

/**
 * Responda:

1. Qual será o valor de: produto.preco

2. Qual será o valor de: copiaProduto.preco

3. Explique com suas palavras por que alterar copiaProduto.preco não altera produto.preco.
 */