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

const PRODUTOS =
    "https://jsonplaceholder.typicode.com/posts";

const USUARIOS =
    "https://jsonplaceholder.typicode.com/users";

const CATEGORIAS =
    "https://jsonplaceholder.typicode.com/invalid-endpoint";


async function carregarCatalogo() {

    const NOMES = ["Produtos", "Usuários", "Categorias"];

    const RESULTADOS = await Promise.allSettled([
        buscarDados(PRODUTOS),
        buscarDados(USUARIOS),
        buscarDados(CATEGORIAS)
    ])

    RESULTADOS.forEach((resultado, indice) => {
        if(resultado.status === "fulfilled") {
            console.log(`${NOMES[indice]} Carregados com sucesso.`)
            console.log("Total de registro é: ", resultado.value.length, "\n")
        }

        if(resultado.status === "rejected") {
            console.log(resultado.reason.message)
        }
    })
}

carregarCatalogo()