/*
3. Closure para executar uma função apenas uma vez
Imagine que seu e-commerce precisa carregar uma configuração inicial.

Você não quer executar essa inicialização repetidamente quando diferentes partes da aplicação solicitarem essa configuração.

Podemos criar uma função que só executa sua operação uma vez.
*/
function executarUmaVez(funcao) {

    let executada = false

    return function (...argumentos) {

        if (executada) {
            return
        }

        executada = true

        return funcao(...argumentos)

    }

}

const inicializarLoja = executarUmaVez(() => {

    console.log("Loja inicializada!")

})

inicializarLoja()
inicializarLoja()
inicializarLoja()

const apresentarProduto = executarUmaVez((nome, preco) => {

    console.log(nome, preco)

})

apresentarProduto("Notebook", 3500)
apresentarProduto("Mouse", 100)

const calcularTotal = executarUmaVez((preco, quantidade) => {

    return preco * quantidade

})

const resultado = calcularTotal(50, 3)

console.log(resultado)