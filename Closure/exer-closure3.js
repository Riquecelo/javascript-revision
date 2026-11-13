/*
1. Closure para criar funções configuráveis
Imagine que você está desenvolvendo um e-commerce e precisa aplicar descontos diferentes para cada categoria de produto.

Em vez de criar várias funções praticamente iguais, podemos utilizar Closure para criar funções configuráveis.
*/

function criarDesconto(percentual) {

    return function (preco) {

        return preco - (preco * percentual / 100)

    }

}

const descontoPromocional = criarDesconto(10)
const descontoEspecial = criarDesconto(20)

console.log(descontoPromocional(200))
console.log(descontoEspecial(200))

/*
O que está acontecendo?
1. criarDesconto(10) cria um ambiente léxico com percentual = 10.
2. A função interna é retornada.
3. Mesmo depois que criarDesconto() termina, a função interna continua acessando percentual.
4. Cada função preserva sua própria configuração.
*/