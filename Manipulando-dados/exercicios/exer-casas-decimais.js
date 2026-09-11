/* Casas decimais
Você possui:

const preco = 199.98765

Mostre o preço com 2 casas decimais.
Resultado:
199.99

Agora:
const preco2 = 49

Mostre:
49.00

Bônus
Monte:
const produto = "Mouse"
const preco = 89.9

E produza:
Mouse - R$ 89.90 */

const preco = 199.98765
const preco2 = 49

const produto = "Mouse"
const preco3 = 89.9

let precoRedondo = preco.toFixed(2) 
let precoRedondo2 = preco2.toFixed(2)
let precoRedondo3 = preco3.toFixed(2)

console.log(precoRedondo)
console.log(precoRedondo2)
console.log(`${produto} - R$ ${precoRedondo3}`)