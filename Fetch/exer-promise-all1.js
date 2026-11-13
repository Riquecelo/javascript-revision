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

const PUBLICACAO =
    "https://jsonplaceholder.typicode.com/posts/2"

const USUARIO =
    "https://jsonplaceholder.typicode.com/users/2"


const informacao = await Promise.all([
    buscarDados(PUBLICACAO),
    buscarDados(USUARIO)
])

const [DADOS1, DADOS2] = informacao

console.log(DADOS1.title) 
console.log(DADOS2.name)