function criarExecutador() {

    let temporizador

    return function () {

        clearTimeout(temporizador)

        temporizador = setTimeout(() => {
            console.log("Executado!")
        }, 2000)

    }

}

const executar = criarExecutador()

executar()
executar()
executar()

/*
Responda sem executar o código:

1. Por que declaramos temporizador dentro de criarExecutador() e não dentro da função retornada?

2. Quando chamamos executar() três vezes, a variável temporizador será criada novamente a cada chamada ou continuará sendo a mesma?

3. Qual é a importância do Closure nesse exemplo?

4. Se removermos o clearTimeout(temporizador), o que acontecerá quando chamarmos executar() três vezes rapidamente?
*/