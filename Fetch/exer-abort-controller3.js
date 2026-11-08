const url = "https://jsonplaceholder.typicode.com/posts/"

let controller = null

function cancelarBusca() {
    if(controller !== null){
        controller.abort()
    }
}

async function buscarProdutos(id) {
    
    cancelarBusca()

    controller = new AbortController()

    try {
        const resposta = await fetch(url+id, {
            signal: controller.signal
        })

        if(resposta.ok === false){
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }
        const dados = await resposta.json()

        return dados

    } catch (error) {
        if(error.name === "AbortError"){
            console.log("A requisição foi cancelada.")
            return null
        }else{
            console.log("Não foi possível carregar os produtos.")
            return "Não foi possível carregar os produtos. Tente novamente."
        }
    }
}

const primeiraBusca = buscarProdutos(1)

const segundaBusca = buscarProdutos(2)

const resultados = await Promise.all([
    primeiraBusca,
    segundaBusca
])

console.log(resultados)