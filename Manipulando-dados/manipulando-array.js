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

let techs = ["html","css","js"]

//adicionar um item no fim
techs.push('node.js')

//adicionar no começo
techs.unshift('sql')

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array
console.log(techs.slice(1,3)) //slice não altera o array

//remover um ou mais itens em qualquer posição do array
//techs.splice(0, 2)

//encontar a posição de um elemento no array
let index = techs.indexOf('js')


console.log('\n//////////////////////////////////////////////\n')
console.log(index)