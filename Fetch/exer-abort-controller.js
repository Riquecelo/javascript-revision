const URL = "https://jsonplaceholder.typicode.com/posts/1"

async function buscarProdutos() {

    const controller= new AbortController()
    try{
        const resposta = await fetch(URL, {signal:controller.signal})
        
        if(resposta.ok === false) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }
        //console.log(resposta)
        const produtos = await resposta.json()

        return produtos

    }
    catch(erro){
        if(erro.name === "AbortError"){
            console.log("A requisição foi cancelada.")
        }else{
            console.log("Não foi possível carregar os produtos.")
        }
    }
}

buscarProdutos()