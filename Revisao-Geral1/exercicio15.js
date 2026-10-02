/* Exercício 15 — Método de usuário

Crie:*/

const usuario = {
    nome: "Marcelo",

    apresentar() {
        console.log(`Olá, eu sou ${this.nome}`);
    }
};

/*Explique:
A)O que this representa nessa situação?
R= O this representará o objeto que estiver associado ao método na hora da invoção da função.

B)O que será exibido? 
R= se for feito usuario.apresentar() será exibido "Olá, eu sou Marcelo".
*/