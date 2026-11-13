const URL = "https://dummyjson.com/products/search?q="

let controller = null

function cancelarBusca() {

    if(controller !== null) {
        controller.abort()
    }

}

async function buscarProdutos(termo) {

    cancelarBusca()

    controller = new AbortController()

    try {

        const newURL = URL + termo

        const resp = await fetch(newURL,{
            signal: controller.signal
        } )

        if(resp.ok === false ) {
            throw new Error(`Erro HTTP: ${resp.status}`)
        } 

        const dados = await resp.json()
        //console.log(dados)

        /* const produtos = dados.products.map((dado) => {
            return [dado.id, dado.title, dado.price]
        }) */

        const produtos = dados.products.map(({ id, title, price }) => {
            return { id, title, price }
        })
        //console.log(produtos)

        return produtos

    } catch (error) {

        if(error.name === "AbortError") {
            //console.log("Requisição cancelada!")
            return null
        } else {
            console.log("Não foi possível carregar os produtos.")
            return "Não foi possível carregar os produtos. Tente novamente."
        }

    }
}

const primeiraBusca = buscarProdutos("phone")

const segundaBusca = buscarProdutos("laptop")

const resultados = await Promise.all([
    primeiraBusca,
    segundaBusca
])

console.log(resultados) 