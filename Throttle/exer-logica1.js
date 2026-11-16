let executando = false

function verificaPosicao() {

    if(executando) {
        return
    }

    executando = true

    console.log("Verificando Posição")
}

verificaPosicao()
verificaPosicao() 
verificaPosicao()