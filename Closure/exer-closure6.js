/*
4. Closure para armazenar resultados em cache (Memoization)
Essa aplicação é muito interessante.

Imagine que seu Front-End precisa realizar um cálculo que pode ser repetido várias vezes.

Em vez de executar o cálculo novamente para os mesmos parâmetros, podemos armazenar os resultados.
*/

function criarCalculadora() {

    const cache = {}

    return function (numero) {
        console.log(cache)
        if (cache[numero] !== undefined) {

            console.log("Resultado recuperado do cache")
            
            return cache[numero]

        }

        console.log("Calculando...")

        const resultado = numero * 2

        cache[numero] = resultado

        return resultado

    }

}

const calcularDobro = criarCalculadora()

console.log(calcularDobro(10))
console.log(calcularDobro(10))
console.log(calcularDobro(20))
console.log(calcularDobro(10))
console.log(calcularDobro(20))