/*Exercício 16 — Dois objetos
Considere:*/

const usuario1 = {
    nome: "Marcelo",

    apresentar() {
        console.log(this.nome);
    }
};

const usuario2 = {
    nome: "Carlos",

    apresentar: usuario1.apresentar
};

//Agora:

usuario1.apresentar();
usuario2.apresentar();

/* Pergunta:

O que será exibido em cada chamada?
R= Na primeira chamada será exibido Marcelo e na segunda Carlos.

E principalmente: por que a mesma função consegue apresentar nomes diferentes? 
R= Porque os objetos estão compartilhando a mesma função, mas com contextos de objetos diferentes na chamada da função. 
*/