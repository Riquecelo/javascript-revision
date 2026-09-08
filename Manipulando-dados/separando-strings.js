//Manipulando String e Arrays

//Separe um texto que contem espaços, em um array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let pharse = "Quem pensa enriquece"
let myArray = pharse.split(" ")//tranforma a string em um novo array
let newMyArray = myArray.join("_")//forma uma nova string com os elementos do array

console.log(myArray)
console.log(newMyArray)