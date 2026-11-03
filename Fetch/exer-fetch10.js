function buscarDados(url) {
    return fetch(url)
        .then((resposta) => {
            if (resposta.ok === false) {
                throw new Error(
                    "Status da situação: " + resposta.status
                )
            }

            return resposta.json()
        })
        .then((dados) => {
            return dados
        })
        .catch((erro) => {
            console.log("Erro ao consultar a API")
            throw erro
        })
}

/*
Aqui, a função é reutilizada para duas URLs diferentes.
- Na primeira chamada, dados representa a publicação.
- Na segunda chamada, dados representa o usuário.
A função não precisa saber o que você fará com os dados. Ela apenas busca, valida a resposta e devolve os dados. Quem a chama decide como utilizá-los.
*/
const PUBLICACAO =
    "https://jsonplaceholder.typicode.com/posts/1"

const USUARIO =
    "https://jsonplaceholder.typicode.com/users/1"

buscarDados(PUBLICACAO)
    .then((dados) => {
        console.log(dados.title)
    })
    .catch((erro) => {
        console.log("Não foi possível carregar a publicação.")
    })

buscarDados(USUARIO)
    .then((dados) => {
        console.log(dados.name)
    })
    .catch((erro) => {
        console.log("Não foi possível carregar o usuário.")
    })
