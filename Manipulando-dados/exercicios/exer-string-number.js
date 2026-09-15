//Agora vamos transformar dados recebidos como string em números.
//Você recebeu estes dados de uma API:
const preco = "149.90"
const quantidade = "3"
const frete = "25.50"
//Transforme todos em números.
//Depois calcule:
//subtotal = preco × quantidade
//total = subtotal + frete

//O resultado esperado é:
//Subtotal: 449.70
//Total: 475.20

//Regra
//Não faça:
//Number("149.90") + Number("25.50")...

//Crie variáveis convertidas:
//const precoNumero = ...

let precoNumero = Number(preco)
let quantidadeNumero = Number(quantidade)
let freteNumero = Number(frete)

let subtotalBruto = precoNumero * quantidadeNumero
let totalBruto = subtotalBruto + freteNumero

let subtotal = subtotalBruto.toFixed(2)
let total = totalBruto.toFixed(2)

console.log(typeof precoNumero, precoNumero)
console.log(typeof quantidadeNumero, quantidadeNumero)
console.log(typeof freteNumero, freteNumero)

console.log('Subtotal: ', subtotal)
console.log('Total: ',total)