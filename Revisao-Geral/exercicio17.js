/* Exercício 17 — Perda do contexto
Considere: */

const usuario = {
    nome: "Marcelo",

    apresentar() {
        console.log(this.nome);
    }
};

const funcao = usuario.apresentar;

funcao();

/* Responda:

A)O que você espera que aconteça?
R= O resultado da execução da função será undefined.

B)Por que o this não continua automaticamente sendo usuario? 
R= Ocorre a perda de referência com objeto usuário.

*/