//Qual será a ordem das mensagens no console?

const URL = "https://jsonplaceholder.typicode.com/posts/2"

async function buscarDados() {

    console.log("Início")

    await fetch(URL)

    console.log("Finalizado")

    return { nome: "Mouse" }
}

const resultado = buscarDados()

console.log("Próxima instrução")

const dados = await resultado

console.log(dados)
