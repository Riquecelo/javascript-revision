/*
5. Closure para criar manipuladores de eventos (Event Handlers)
Agora vamos trabalhar com algo muito presente no Front-End: eventos do DOM.

Imagine uma página com três botões, cada um representando uma categoria de produto.

Queremos que cada botão execute uma ação diferente, preservando sua própria categoria.
*/

function criarManipuladorCategoria(categoria) {

    return function () {

        console.log(`Categoria selecionada: ${categoria}`)

    }

}

const botaoEletronicos = document.querySelector("#eletronicos")
const botaoRoupas = document.querySelector("#roupas")
const botaoCalcados = document.querySelector("#calcados")

botaoEletronicos.addEventListener(
    "click",
    criarManipuladorCategoria("Eletrônicos")
)

botaoRoupas.addEventListener(
    "click",
    criarManipuladorCategoria("Roupas")
)

botaoCalcados.addEventListener(
    "click",
    criarManipuladorCategoria("Calçados")
)