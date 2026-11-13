let temporizador

function executar() {

    temporizador = setTimeout(() => {
        console.log("A")
    }, 2000)

    temporizador = setTimeout(() => {
        console.log("B")
    }, 2000)

}

executar()

console.log(temporizador)

/*
Agora responda:

1. Quantos temporizadores são agendados?

2. Qual será a saída no console?

3. Por que o segundo setTimeout() não cancela o primeiro, mesmo utilizando a mesma variável temporizador?
*/