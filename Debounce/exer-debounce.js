function debounce(callback, tempo){
    let temporizador

    return (...argumentos) => {
        clearTimeout(temporizador)

        temporizador = setTimeout(() => {
            callback(...argumentos)
        },tempo)
    }
}

/* function pesquisar() {
    console.log("Pesquisa executada!")
}

const pesquisarDebounce = debounce(pesquisar, 2000)

pesquisarDebounce()
pesquisarDebounce()
pesquisarDebounce() */

/* function pesquisarProduto(nome, categoria) {

    console.log("Produto:", nome)
    console.log("Categoria:", categoria)

}

const pesquisarDebounce = debounce(pesquisarProduto, 1500)

pesquisarDebounce("Camisa", "Masculina")
pesquisarDebounce("Calça", "Feminina")
pesquisarDebounce("Tênis", "Esportivo") */

function exibirProduto(produto) {
    console.log(produto.nome)
}

const produto = {
    nome: "Camisa"
}

const exibirProdutoDebounce = debounce(exibirProduto, 1000)

exibirProdutoDebounce(produto)

produto.nome = "Calça"