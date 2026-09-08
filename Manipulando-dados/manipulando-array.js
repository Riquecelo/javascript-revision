//Crinado array com construtor.

let array1 = new Array("a","b","c", "d")

console.log(array1)

// tipos de elemento do array.

let array2 = ["a", 12, {nome: "Marcelo"}, ()=>console.log("OLÁ!")]

console.log(array2)
console.log(array2[2].nome)//pega a propriedade do objeto dentro do array.
console.log(array2[3]())//chama a função dentro do objeto.

//tranformar cadeia de caractere em array.

let word = "manipulação"

let array3 = Array.from(word) //pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array.

console.log(word.length)
console.log(array3)