function exibirMensagem() {
    const mensagem = "Olá desenvolvedor!"
    let contador = 0

    return () => {
        contador++
        //console.log(mensagem + contador)
        return mensagem + contador
    }
}

const exibindo = exibirMensagem()

const exibir1 = exibindo()
const exibir2 = exibindo()

console.log(exibir1)
console.log(exibir2)