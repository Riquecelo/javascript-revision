/* Exercício 10 — API mais complexa
Faça tudo usando destructuring:

A)Extraia o nome do cliente.

B)Extraia cidade e estado.

C)Extraia o segundo produto.

D)Extraia o nome e preço do segundo produto.

E)Renomeie:
nome → nomeProduto
preco → precoProduto */

const respostaAPI = {
    cliente: {
        nome: "Carlos",
        endereco: {
            cidade: "São Paulo",
            estado: "SP"
        }
    },

    produtos: [
        {
            nome: "Notebook",
            preco: 3500
        },
        {
            nome: "Mouse",
            preco: 150
        },
        {
            nome: "Teclado",
            preco: 300
        }
    ]
};

const {cliente:{nome}} = respostaAPI 

const {cliente:{endereco:{cidade, estado}}} = respostaAPI

const {produtos: [,produto]} = respostaAPI

const {nome: nomeProduto, preco:precoProduto} = produto

console.log(nomeProduto, precoProduto)

