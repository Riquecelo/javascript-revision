/* 💀 NÍVEL 6 — DESAFIO REAL DE FRONT-END

Agora vamos juntar praticamente tudo.

Imagine que você está trabalhando em um e-commerce.

A API retorna: */

const respostaAPI = {
    usuario: {
        nome: "Marcelo",
        idade: 32
    },

    produtos: [
        {
            id: 1,
            nome: "Notebook Lenovo",
            preco: 3499.90,
            estoque: 5,
            categoria: "Eletrônicos"
        },
        {
            id: 2,
            nome: "Mouse Logitech",
            preco: 149.90,
            estoque: 20,
            categoria: "Periféricos"
        },
        {
            id: 3,
            nome: "Teclado Mecânico",
            preco: 399.90,
            estoque: 0,
            categoria: "Periféricos"
        },
        {
            id: 4,
            nome: "Monitor LG",
            preco: 1299.90,
            estoque: 8,
            categoria: "Eletrônicos"
        },
        {
            id: 5,
            nome: "Headset Gamer",
            preco: 299.90,
            estoque: 12,
            categoria: "Áudio"
        }
    ]
};

/* 🚀 Desafio 23 — Preparando os dados

Extraia utilizando destructuring:

nome do usuário
idade
produtos */
const {usuario:{ nome, idade}, produtos} = respostaAPI


/* 🚀 Desafio 24 — Produtos disponíveis

Crie uma lista contendo somente produtos com:

estoque > 0 */
const produtosComEstoque = produtos.filter((produto) => produto.estoque > 0)


/* 🚀 Desafio 25 — Produtos para o Front-End

Transforme a lista anterior em:
[
    {
        nome: "...",
        preco: "R$ ..."
    }
]

Ou seja, o Front-End só precisa receber:

nome
preço */
const infoProdutos = produtos.map((produto) => {
    return {nome: produto.nome, preco:`R$ ${produto.preco}`}
})

/* 🚀 Desafio 26 — Produto específico

Encontre:

Mouse Logitech

e mostre seus dados.
 */

const busca = produtos.find((produto) => produto.nome === "Mouse Logitech")


/* 🚀 Desafio 27 — Verificação

Descubra:

Existe algum produto sem estoque?
Todos os produtos têm preço?
Todos os produtos têm nome? */

const temProdutoSemEstoque = produtos.some((produto) => produto.estoque <= 0)

const temProdutosSemPreco = produtos.every((produto) => produto.preco > 0)
const temProdutoSemNome = produtos.every((produto) => produto.nome !== "")

//console.log("Existe algum produto sem estoque? ", temProdutoSemEstoque)
//console.log("Todos os produtos têm preço? ", temProdutosSemPreco)
//console.log("Todos os produtos têm nome?", temProdutoSemNome)


/* 🚀 Desafio 28 — Estoque total

Calcule:

quantidade total de produtos em estoque

Não queremos o valor financeiro.

Queremos a quantidade. */

const quantidadeTotalEstoque = produtos.reduce((contador, produto) => {
    return contador += produto.estoque
},0)


/* 🚀 Desafio 29 — Valor total do estoque

Agora calcule:

preço × estoque

para cada produto e descubra o valor total armazenado. */

const valorTotalEstoque = produtos.reduce((contador, produto) => {
    return contador += produto.preco * produto.estoque
},0)


/* 🚀 Desafio 30 — Ordenação

Crie uma lista onde os produtos estejam ordenados:

maior preço
↓
menor preço */

const produtoOrdenado = produtos.sort((a,b) => a.preco - b.preco)


/* 🚀 Desafio 31 — Atualização imutável

O usuário ganhou uma informação nova:

nivel: "Pleno"

Crie um novo objeto de usuário utilizando spread.

Não altere o original.
 */

const {usuario} = respostaAPI
const usuarioAtualizado = {...usuario, nivel:"Pleno"}


/* 🚀 Desafio 32 — Carrinho

Crie:

let carrinho = [];

Adicione:

Notebook
Mouse
Teclado

utilizando operações de array.

Depois:

remova o primeiro;
adicione Monitor no início;
remova o último;
inverta a ordem. */

let carrinho = []

carrinho.push("Notebook")
carrinho.push("Mouse")
carrinho.push("Teclado")
carrinho.shift()
carrinho.unshift("Monitor")
carrinho.pop()
carrinho.reverse()

console.log(carrinho)