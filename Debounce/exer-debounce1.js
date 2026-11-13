const produtos = [
    { id: 1, nome: "Camisa", preco: 100 },
    { id: 2, nome: "Calça", preco: 150 },
    { id: 3, nome: "Camiseta", preco: 80 },
    { id: 4, nome: "Tênis", preco: 250 },
    { id: 5, nome: "Camisa Social", preco: 180 }
]

function debounce(callback, tempo){
    let temporizador

    return (...argumentos) => {
        clearTimeout(temporizador)

        temporizador = setTimeout(() => {
            callback(...argumentos)
        },tempo)
    }
}

function pesquisarProduto(termo){
    termo = termo.trim().toLowerCase()

    if (termo.trim() === "") {
        return
    }

    const produtoEncontrado = produtos.filter((produto) => {
        return produto.nome.toLowerCase().includes(termo)
    })
    /* const produtoEncontrado = produtos.filter((produto)=>{
        if(produto.nome.toLowerCase().includes(termo.toLowerCase())){
            return produto.nome
        }
    }) */

    console.log(produtoEncontrado)
}

const pesquisarDebounce = debounce(pesquisarProduto,1000)

const campoPesquisa = document.querySelector("#pesquisa")

campoPesquisa.addEventListener("input", (evento) => {

    pesquisarDebounce(evento.target.value)

})