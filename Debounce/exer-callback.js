function exibirMensagem() {
    console.log("Pesquisa realizada!")
}

function executarAcao(callback) {

    setTimeout(() => {
        callback()
    }, 2000)

}

executarAcao(exibirMensagem)

/*
Responda às quatro perguntas:
1. Por que passamos exibirMensagem sem parênteses?
2. O que representa o parâmetro callback dentro de executarAcao()?
3. Em qual momento exibirMensagem() será efetivamente executada?
4. O que aconteceria se escrevêssemos executarAcao(exibirMensagem())?
*/