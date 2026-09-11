/* Strings → Arrays
Você recebeu uma lista de categorias como uma string:

const categorias = "Eletrônicos,Informática,Acessórios,Games"

Transforme em:

[
    "Eletrônicos",
    "Informática",
    "Acessórios",
    "Games"
]

Depois percorra o array e mostre:

Categoria: Eletrônicos
Categoria: Informática
Categoria: Acessórios
Categoria: Games */

const categorias = "Eletrônicos,Informática,Acessórios,Games"

const categoriasArray = categorias.split(',')

console.log(categoriasArray.length)

categoriasArray.forEach((produto)=> console.log(`Categoria: ${produto}`))