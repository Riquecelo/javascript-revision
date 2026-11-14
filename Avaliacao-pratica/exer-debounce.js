const inputBusca = document.querySelector("#buscar")
const secaoProdutos = document.querySelector("section")
const limparTela = document.querySelector("button")

let controller = null

function cancelarBusca() {
    if(controller !== null){
        controller.abort()
    }
}

function debounce (calback, temp) {
    let temporizador

    return (...argumentos) => {
        clearTimeout(temporizador)

        temporizador = setTimeout(() => {
            calback(...argumentos )
        },temp)
    }
}

function renderizarProduto(produtos) {
    produtos.forEach(element => {
        let novaTag = document.createElement('div')
        console.log(element)
        novaTag.innerHTML = `
        <img src="${element.images[0]}" alt="">
        <p>${element.title}</p>
        <p>${element.price}</p>
        `
        secaoProdutos.appendChild(novaTag)
    });
}

async function buscaProdutos(termo) {
    termo = termo.trim().toLowerCase()

    if(termo === ""){
        return
    }

    try {

        controller = new AbortController()

        const resposta = await fetch(`https://dummyjson.com/products/search?q=${termo}`, {signal: controller.signal})

        if(resposta.ok === false){
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const dados = await resposta.json()
        renderizarProduto(dados.products)
        //console.log(dados)
        return dados

    } catch (error) {
        if(error.name === "AbortError"){
            return
        }
        console.log(error.mensage)
    }
}

const ativaBusca = debounce(buscaProdutos,1000)

inputBusca.addEventListener("input",(event)=>{
    cancelarBusca()
    ativaBusca(event.target.value)
})

limparTela.addEventListener("click", (event)=>{
    event.preventDefault()
    secaoProdutos.replaceChildren()
})