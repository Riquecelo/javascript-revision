//Imutabilidade = não alterar diretamente o dado original.

/* 🏋️ Exercício 2 — A pegadinha

Sem executar o código, diga o que acontece: */

const produto = {
    nome: "Notebook",
    preco: 3500,

    especificacoes: {
        memoria: "16GB",
        armazenamento: "512GB"
    }
};

const copiaProduto = {
    ...produto
};

copiaProduto.especificacoes.memoria = "32GB";

console.log(produto.especificacoes.memoria);
console.log(copiaProduto.especificacoes.memoria);

/* Perguntas:

O que será exibido no primeiro console.log?
R= 32GB
O que será exibido no segundo?
R= 32GB
Por que a alteração afetou produto, mesmo tendo usado spread?
R= Neste caso foi feita uma copia somente do primeiro nível do objeto o segundo nível está sendo compartilhado pelos dois objetos, por isso a alteração da especificação memoria reflete nos dois objetos.

Aqui quero que você tente explicar com suas próprias palavras, porque esse é o ponto central de shallow copy.
 */