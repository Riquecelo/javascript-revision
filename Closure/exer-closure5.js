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