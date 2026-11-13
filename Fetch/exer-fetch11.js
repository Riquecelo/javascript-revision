function buscarDados(url) {
    return fetch(url)
        .then((resposta) => {
            if(resposta.ok === false ) {
                throw new Error("Status da situação: " + resposta.status)
            }
            return resposta.json()
        })
        .catch((erro) => {
            console.log("Erro ao consultar a API")
            throw erro
        })
}

/* const APIURL = "https://jsonplaceholder.typicode.com/posts/2"

buscarDados(APIURL)
    .then((dados) => {
        console.log(dados.title)
        console.log(dados.body)
    })
    .catch((erro) => {
        console.log("Não foi possível carregar a publicação.")
    }) */

const PUBLICACAO = "https://jsonplaceholder.typicode.com/posts/2"
const USUARIO = "https://jsonplaceholder.typicode.com/users/2"

buscarDados(PUBLICACAO)
    .then((dados) => {
        console.log(dados.title)
    })

buscarDados(USUARIO)
    .then((dados) => {
        console.log(dados.name)
    })