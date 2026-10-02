/* Exercício 12 — Atualizando uma propriedade

Crie um novo objeto onde: idade = 33
mas todas as outras propriedades continuam iguais.

Novamente: não altere o objeto original. */


const usuario = {
    nome: "Marcelo",
    idade: 32,
    profissao: "Front-End Developer"
};

const novoUsuario = {...usuario, idade:33}

console.log(novoUsuario)

