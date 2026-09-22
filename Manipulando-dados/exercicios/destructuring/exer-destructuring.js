//Exercício 1 — Básico
const produto = {
    nomeProduto: "Notebook Lenovo",
    preco: 3499,
    estoque: 5
};

const {nomeProduto, preco, estoque } = produto

console.log(nomeProduto)
console.log(preco)
console.log(estoque)


//Exercício 2 — Renomeando
const usuario = {
    nome: "Carlos",
    idade: 28
};

const {nome : nomeUsuario, idade: idadeUsuario} = usuario

console.log(nomeUsuario)
console.log(idadeUsuario)


//Exercício 3 — API
const respAPI = {
    cliente: {
        nomeCliente: "Maria",
        emailCliente: "maria@email.com"
    }
};

const {cliente: {nomeCliente, emailCliente}} = respAPI
console.log(nomeCliente)
console.log(emailCliente)


//Desafio do Dia 5
const respostaAPI = {
    usuario: {
        nome: "João da Silva",
        email: "joao@email.com",
        idade: 32
    },
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

const {usuario: {nome, email, idade}} = respostaAPI
const {endereco: {cidade, estado}} = respostaAPI

console.log(nome)
console.log(email)
console.log(idade)
console.log(cidade)
console.log(estado)


const respostaAPI2 = {
    usuarioTeste: {
        nomeUsuario: {
            primeiroNome: 'Marcelo', 
            ultimoNome: 'santos'
        },
        email: "joao@email.com",
        idade: 32
    },
   
};

const {usuarioTeste: {nomeUsuario: {primeiroNome}}} = respostaAPI2

console.log('Primeiro Nome: ',primeiroNome)