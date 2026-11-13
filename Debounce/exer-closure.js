function criarContador() {

    let quantidade = 0

    return function () {
        quantidade++

        console.log(quantidade)
    }

}

const contadorA = criarContador()

contadorA()
contadorA()
contadorA()

/*
Responda com suas próprias palavras:

1. Qual será a saída no console?

2. Por que a variável quantidade continua acessível mesmo depois que a função criarContador() terminou sua execução?

3. Se executarmos:
const contadorB = criarContador()

contadorB()
contadorB()


O contadorB compartilhará a mesma variável quantidade do contadorA ou terá uma variável independente?

Explique seu raciocínio.
*/