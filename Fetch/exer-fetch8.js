const PUBLICACAO = "https://jsonplaceholder.typicode.com/posts/1"
const USUARIO = "https://jsonplaceholder.typicode.com/users/1"

async function buscarDados(url) {
    try{
        const resposta = await fetch(url)

        if(resposta.ok === false){
            throw new Error("Status da situação: " + resposta.status)
        }

        const dados = await resposta.json()

        return dados
    }
    catch(erro){
        console.log("Erro ao consultar a API")
        throw erro
    }
}

const DADOS1 = await buscarDados(PUBLICACAO)
const DADOS2 = await buscarDados(USUARIO)


console.log(DADOS1.title)
console.log(DADOS2.name)