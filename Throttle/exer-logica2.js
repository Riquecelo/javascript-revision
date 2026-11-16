let executando = false

function verificaPosicao() {

    if(executando) {
        return
    }

    executando = true

    console.log("Verificando Posição")

    setTimeout(()=>{
        executando = false
    },500)
}

verificaPosicao()
verificaPosicao() 
verificaPosicao()
verificaPosicao()

setTimeout(()=>{
    verificaPosicao()
},500)