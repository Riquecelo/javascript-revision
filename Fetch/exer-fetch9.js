/* fetch("https://api.escuelajs.co/api/v1/products")
    //.then((dados) => console.log(dados))
    .then((dados) => dados.json())
    .then((dados) => console.log(dados)) */


function buscarDados(url) {
    return fetch(url)
        .then((resposta) => {
            if (resposta.ok === false) {
                throw new Error(
                    "Status da situação: " + resposta.status
                )
            }

            //return resposta.json()
            return resposta
        })
        .then((dados) => {
            return dados
        })
        .catch((erro) => {
            console.log("Erro ao consultar a API")
            throw erro
        })
}

const INFO1 = await buscarDados("https://api.escuelajs.co/api/v1/products")

console.log(INFO1)

/*
Observe três pontos importantes:
1. return fetch(url): a função retorna a Promise que representa a operação.
2. return resposta.json(): o retorno dessa etapa permite que o próximo .then() receba os dados já convertidos para um objeto JavaScript.
3. throw erro: mantém a rejeição da Promise, permitindo que quem chamar a função trate o erro.
O .then((dados) => { return dados }) é redundante neste exemplo, porque o .then() anterior já retorna o resultado de resposta.json(). Vamos mantê-lo por enquanto para visualizar o fluxo, mas depois você poderá removê-lo.
*/


/* Teste direto sem tratamento de erro */
function consultarApi(url) {
    return fetch(url)
    .then((resposta) => {
        return resposta
    })
}

const INFO2 = await consultarApi("https://jsonplaceholder.typicode.com/posts/1")

console.log(INFO2)