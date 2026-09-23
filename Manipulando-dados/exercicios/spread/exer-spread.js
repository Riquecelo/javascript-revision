/* Exercício 1 — Spread com array

Dado:

const numeros = [10, 20, 30];

Crie um novo array chamado novosNumeros que contenha:

10
20
30
40
50 */

const numeros = [10, 20, 30];

const novosNumeros = [...numeros,40,50]

console.log(typeof novosNumeros, novosNumeros)

/* Exercício 2 — Juntando arrays
Crie um array chamado tecnologias contendo todos os elementos: */

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const tecnologias = [...frontend, ...backend]

console.log(typeof tecnologias, tecnologias)

/*
Exercício 3 — Objeto

Dado:
const usuario = {
    nome: "Marcelo",
    idade: 32
};

Crie usuarioCompleto utilizando spread e adicione:
profissao: "Front-End Developer"
*/

const usuario = {
    nome: "Marcelo",
    idade: 32
};

const usuarioCompleto = {...usuario, profissao: "Front-End Developer"}

console.log(usuarioCompleto)

/*
Desafio do Dia 5 — Parte 2

Agora vamos fazer algo mais próximo de uma situação real.

Temos:

const usuario = {
    nome: "Marcelo",
    idade: 32,
    profissao: "Front-End Developer"
};

E queremos criar um novo objeto chamado usuarioAtualizado onde:

o nome continua igual;
a idade passa para 33;
a profissão continua igual;
uma nova propriedade cidade recebe "Paragominas".
Regras:

Você deve usar spread.

E não pode alterar diretamente:

usuario.idade = 33;

A ideia é criar um novo objeto.
*/

const usuarioAtualizado = {...usuarioCompleto, idade:33, cidade: "Paragominas"}

console.log(usuarioAtualizado)