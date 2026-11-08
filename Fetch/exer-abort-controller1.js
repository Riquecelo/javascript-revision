const URL = "https://jsonplaceholder.typicode.com/posts/1"

async function buscarProdutos() {

    const controller = new AbortController()

    const temporizador = setTimeout(()=>{
        controller.abort()
    },3000)

    try {
        const resposta = await fetch(URL, {signal: controller.signal})

        if(resposta.ok === false) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const produtos = await resposta.json()

        console.log(produtos)

        return produtos

    } catch (error) {
        //console.log(error.name)
        //console.log(error.message)
        if(error.name === "AbortError"){
            console.log("A requisição foi cancelada.")
        }else{
            console.log("Não foi possível carregar os produtos.")
        }
    } finally {
        clearTimeout(temporizador)
    }
}

buscarProdutos()