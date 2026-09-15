/* Maiúsculas e minúsculas
Você recebeu:
const nome = "mArCeLo"

Transforme em: MARCELO

Depois: marcelo

Agora faça:
const email = "  CLIENTE@EMAIL.COM  "

Transforme em: cliente@email.com

Dica: existe mais de uma manipulação de string acontecendo aqui. */

const nome = "mArCeLo"
const email = "  CLIENTE@EMAIL.COM  "

let nomeMaiusc = nome.toUpperCase()
let nomeMinusc = nome.toLowerCase()
let emailMinusc = email.toLowerCase()
let novoEmail = emailMinusc.split(' ')
let emailSemEspaco = novoEmail.join('')

console.log(nomeMaiusc)
console.log(nomeMinusc) 
console.log(emailSemEspaco)