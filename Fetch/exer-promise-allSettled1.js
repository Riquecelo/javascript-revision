function buscarDados (url) {
    return fetch(url)
        .then((resp) => {
            if(resp.ok === false) {
                throw new Error("Status da situação: " + resp.status)
            }

            return resp.json()
        })
        .catch((erro) => {
            console.log("Erro ao consultar a API")
            throw erro
        })
}

const PUBLICACAO = "https://jsonplaceholder.typicode.com/posts/2"

const USUARIO = "https://jsonplaceholder.typicode.com/users/1"

const USUARIO_INVALIDO = "https://jsonplaceholder.typicode.com/users/9999"



async function carregarDados() {
    try{ 
        const RESULTADO = await Promise.allSettled([
            buscarDados(PUBLICACAO),
            buscarDados(USUARIO),
            buscarDados(USUARIO_INVALIDO)
        ])

        if(RESULTADO[0].status === "fulfilled"){
            console.log(RESULTADO[0].value.title)
        }

        if(RESULTADO[1].status === "fulfilled"){
            console.log(RESULTADO[1].value.name)
        }

        if(RESULTADO[2].status === "rejected"){
            console.log(RESULTADO[2].reason.message)
        }

       
        //console.log( RESULTADO)
    } catch (erro) {
        console.log("=>", erro)
    }
}

carregarDados()