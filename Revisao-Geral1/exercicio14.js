/* Exercício 14 — Combinação
Faça:

Extraia nome e idade.
Crie um novo objeto usando spread.
Adicione:
nivel: "Pleno"

O objeto original deve permanecer intacto. */


const usuario = {
    nome: "Marcelo",
    idade: 32,
    profissao: "Front-End Developer"
};

const {nome, idade} = usuario

const novoUsuario = {...usuario, nivel: "Pleno"}


console.log(nome, idade) 
console.log(novoUsuario)