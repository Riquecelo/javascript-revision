function exibirMensagem() {
    const mensagem = "Olá desenvolvedor!"

    return () => {
        console.log(mensagem)
    }
}

const exibindo = exibirMensagem()

exibindo()
exibindo()
