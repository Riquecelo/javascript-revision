//Imutabilidade = não alterar diretamente o dado original.

//🏋️ Exercício 3 — Corrigindo o objeto aninhado

const produto = {
    nome: "Notebook",
    preco: 3500,

    especificacoes: {
        memoria: "16GB",
        armazenamento: "512GB"
    }
};

//Queremos criar copiaProduto e alterar somente a memória da cópia: copiaProduto.especificacoes.memoria = "32GB";

const copiaProduto = {
    ...produto,
    especificacoes: {
        ...produto.especificacoes
    }
}

copiaProduto.especificacoes.memoria = "32GB"

console.log(produto.especificacoes.memoria )
console.log(copiaProduto.especificacoes.memoria )

//Fazendo o spread nos dois níveis do objeto tenho uma cópia total, com isso a alteração feita em um não reflete no outro. 