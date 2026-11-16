const campoPesquisa = document.querySelector("#buscar")
const secaoProdutos = document.querySelector("section")
const limparTela = document.querySelector("button")


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

function renderizarProduto(produtos) {
    
    produtos.forEach(element => {
        const novaTag = document.createElement('div')

        novaTag.innerHTML = `

        <img src="${element.images[0]}" alt="">

        <p>${element.title}</p>

        <p>${element.price}</p>

        `

        secaoProdutos.appendChild(novaTag)

    });

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
        
        const produtos = dados.products
        renderizarProduto(produtos)
        
        return dados
    }
    catch(erro){
        if(erro.name === "AbortError"){
            return
        }
        console.log("Erro na pesquisa:", erro.message)
    }
}

const pesquisarDebounce = debounce(pesquisarProduto,1000)

campoPesquisa.addEventListener("input", (evento) => {

    cancelarBusca()
    pesquisarDebounce(evento.target.value)

})

limparTela.addEventListener("click", (evento)=>{
    evento.preventDefault()
    secaoProdutos.replaceChildren()
})