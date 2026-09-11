/* Criando array com construtor
Crie um array usando: new Array()

Adicione:

React
JavaScript
TypeScript
HTML
CSS

Depois mostre o array.

Agora tente:
const tecnologias = new Array(5)

Pergunta:

O que aconteceu?

Quantos elementos existem? */

const tecnologias1 = new Array()

tecnologias1.push('React','JavaScript','TypeScript','HTML','CSS')

//console.log(tecnologias1.length)

const tecnologias2 = new Array(5)


//tecnologias2.push('React','JavaScript','TypeScript','HTML','CSS')

tecnologias2[0] = 'React'
tecnologias2[1] = 'JavaScript'
console.log(tecnologias2)
console.log(tecnologias2.length)