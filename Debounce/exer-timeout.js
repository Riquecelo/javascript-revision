let temporizador

function executar() {

    clearTimeout(temporizador)

    temporizador = setTimeout(() => {
        console.log("Executado!")
    }, 2000)
    //console.log(temporizador)
}

executar()
executar()
executar()