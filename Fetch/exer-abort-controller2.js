const URL = "https://jsonplaceholder.typicode.com/posts/1"

let controller 

function cancelarBusca() {
    controller.abort()
}

async function buscarProdutos() {
    
    controller = new AbortController()

    try {
        const resposta = await fetch(URL, {
            signal: controller.signal
        })

        if(resposta.ok === false) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const dados = await resposta.json()
        return dados

    } catch (error) {
        console.log(error.message)
    }

}

const requisicao = buscarProdutos()

cancelarBusca()

const teste = await requisicao
console.log(teste)