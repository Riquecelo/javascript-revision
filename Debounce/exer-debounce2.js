let controller = null

function debounce(callback, tempo){
    let temporizador

    return (...argumentos) => {
        clearTimeout(temporizador)

        temporizador = setTimeout(() => {
            callback(...argumentos)
        },tempo)
    }
}

function cancelarBusca(){
    if(controller !== null){
        controller.abort()
    }
}

async function pesquisarProduto(termo){

    termo = termo.trim().toLowerCase()

    if (termo === "") {
        return
    }

    try{
        controller = new AbortController()

        const produtoEncontrado = await fetch(`https://dummyjson.com/products/search?q=${termo}`, {
            signal: controller.signal
        })

    if(produtoEncontrado.ok === false){
        throw new Error(`Erro HTTP: ${produtoEncontrado.status}`)
    }

    const dados = await produtoEncontrado.json()

    if(dados.products.length === 0){
        console.log("Nenhum produto encontrado")
        return
    }

    console.log(dados.products)
    }
    catch(erro){
        if(erro.name === "AbortError"){
            return
        }
        console.log("Erro na pesquisa:", erro.message)
    }
}

const pesquisarDebounce = debounce(pesquisarProduto,2000)

const campoPesquisa = document.querySelector("#pesquisa")

campoPesquisa.addEventListener("input", (evento) => {

    cancelarBusca()
    pesquisarDebounce(evento.target.value)

})