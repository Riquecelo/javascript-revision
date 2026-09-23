/* Exercício Integrado — Destructuring + Spread
Imagine que uma API retornou: */

const respostaAPI = {
    usuario: {
        nome: "Marcelo",
        idade: 32,
        profissao: "Front-End Developer"
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
            preco: 400
        }
    ]
};

/* Parte 1 — Destructuring
Extraia utilizando destructuring: nome, idade, profissao
E também pegue o segundo produto do array. */

const {usuario: {nome, idade, profissao}} = respostaAPI
const {produtos: [,segundo]} = respostaAPI

console.log('Dados do usuário:',nome,idade,profissao)
//console.log(segundo)



/* Parte 2 — Destructuring dentro do array
Agora, em vez de pegar o objeto inteiro do segundo produto, extraia diretamente:
nomeProduto
precoProduto */
const {produtos: [, {nome: nomeProduto, preco: precoProduto} ]} = respostaAPI

console.log(nomeProduto)
console.log(precoProduto)

/* Parte 3 — Spread
Agora crie um novo objeto chamado: usuarioAtualizado
Ele deve conter tudo que usuario possui, mas com:
idade → 33
cidade → "Paragominas"
Use spread. */
const {usuario} = respostaAPI

const usuarioAtualizado = {...usuario, idade:33, cidade: "Paragominas",}

console.log(usuarioAtualizado)


/* Parte 4 — Juntando tudo 
Crie um novo array chamado: produtosAtualizados
Ele deve conter todos os produtos originais e mais um produto:
{
    nome: "Monitor",
    preco: 1200
} */
const {produtos} = respostaAPI
const produtosAtualizados = [...produtos, {nome: "Monitor", preco: 1200}]

console.log(produtosAtualizados)

