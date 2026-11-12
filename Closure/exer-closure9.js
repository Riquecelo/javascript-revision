function criarFiltro(precoMaximo) {

    return function (produto) {

        return produto.preco <= precoMaximo

    }

}

const filtroPromocao = criarFiltro(100)

const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Fone", preco: 90 }
]

const resultado = produtos.filter(filtroPromocao)

console.log(resultado)

/*
Responda às três perguntas:
1. Quando filtroPromocao é executada, a função criarFiltro() já terminou sua execução?
2. Como a função interna consegue acessar precoMaximo, mesmo depois que a função externa terminou?
3. Qual será o resultado do console.log(resultado)? Explique o motivo.
*/