async function obterProduto() {
    return {
        nome: "Mouse",
        preco: 150
    };
}

obterProduto().then((produto) => {
    console.log(produto.nome);
});

//O console exibirá Mouse