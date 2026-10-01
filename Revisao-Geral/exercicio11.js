/* Exercício 11 — Atualização de usuário

Crie: const usuarioAtualizado mantendo todas as propriedades anteriores e adicionando:
experiencia: 3
Não altere diretamente usuario. */

const usuario = {
    nome: "Marcelo",
    idade: 32,
    profissao: "Front-End Developer"
};

const usuarioAtualizado = {...usuario, experiencia:3} 

console.log(usuarioAtualizado)