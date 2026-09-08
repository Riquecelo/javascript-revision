//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let numero = 321.59874
console.log(typeof numero.toFixed(2))
console.log(numero.toFixed(2).replace('.',','))

console.log(Number(numero.toFixed(2).replace('.',',')))//Numero não aceita virgula
console.log(Number(numero.toFixed(2)))
console.log(typeof Number(numero.toFixed(2)))