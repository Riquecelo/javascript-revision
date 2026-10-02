/* NÍVEL 1 — Manipulação de dados
Exercício 1 — Produtos de uma loja */

/* O sistema precisa:
A)Criar uma nova lista contendo somente os produtos disponíveis em estoque.

B)Criar uma nova lista contendo apenas os nomes dos produtos.

C)Descobrir se existe algum produto sem estoque.

D)Verificar se todos os produtos possuem preço maior que zero.

E)Encontrar o produto cujo id seja 4.

F)Descobrir a posição do produto cujo id seja 3. */

//Você recebeu da API:
const produtos = [
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
];

const produtosDisponiveis = produtos.filter((produto) => produto.estoque > 0 )

const nomeProdutos = produtos.map((produto) => produto.nome)

const temProdutoSemEstoque = produtos.some((produto) => produto.estoque === 0)

const todosPrecoSaoMaiorQueZero = produtos.every((produto) => produto.preco > 0)

const produtoId4 = produtos.find((produto) => produto.id === 4)

const posicaoDoProdutoId3 = produtos.findIndex((produto) => produto.id === 3)

console.log(posicaoDoProdutoId3)





