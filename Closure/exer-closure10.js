function criarFiltro(precoMinimo, precoMaximo) {

    return function (produto) {

        return produto.preco >= precoMinimo && produto.preco <= precoMaximo 

    }

}

const filtroPromocao = criarFiltro(50,150)

const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Fone", preco: 90 }
]

const resultado = produtos.filter(filtroPromocao)

console.log(resultado)
