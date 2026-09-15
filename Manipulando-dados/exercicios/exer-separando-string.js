/* Separando strings
Você recebeu:
const nomeCompleto = "Marcelo Henrique Silva"

Separe o nome:
Marcelo
Henrique
Silva

Em um array:
["Marcelo", "Henrique", "Silva"]

Depois descubra:
primeiro nome;
sobrenome.
Resultado esperado
Primeiro nome: Marcelo
Sobrenome: Silva */

const nomeCompleto = "Marcelo Henrique Silva"

const arrayNome = nomeCompleto.split(" ")

console.log(arrayNome)

console.log(`Primeiro nome : ${arrayNome[0]}`)
console.log(`Sobrenome : ${arrayNome[2]}`)