//Imutabilidade = não alterar diretamente o dado original.

//🏋️ Exercício 6 — Array + objetos

const produtos = [
    {
        nome: "Notebook",
        preco: 3500,
        estoque: 10
    },
    {
        nome: "Mouse",
        preco: 150,
        estoque: 20
    }
];

/* Precisamos criar produtosAtualizados onde:

o Notebook passa a custar R$ 3200
o Mouse permanece igual
produtos não pode ser alterado
você deve utilizar map() e spread */

//const produtosAtualizados = produtos.map(produto => ({...produto}));

const produtosAtualizados = produtos.map((produto) => ({...produto}))

produtosAtualizados[0].preco = 3200

console.log(produtos)
console.log(produtosAtualizados)

//segunda solução possível
/*
const produtosAtualizados = produtos.map(produto => {
    if (produto.nome === "Notebook") {
        return {
            ...produto,
            preco: 3200
        };
    }

    return {
        ...produto
    };
});
*/