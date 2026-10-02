/* Exercício 8 — Renomeando propriedades
Crie variáveis chamadas:
nomeUsuario
emailUsuario
idadeUsuario

utilizando destructuring. */
//A API retorna:

const usuario = {
    nome: "Marcelo",
    email: "marcelo@email.com",
    idade: 32
};

const {nome: nomeUsuario, email: emailUsuario, idade:idadeUsuario} = usuario

console.log(nomeUsuario, emailUsuario, idadeUsuario)

