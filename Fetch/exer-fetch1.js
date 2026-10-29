async function buscarProdutos() {
    const resposta = await fetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    console.log(resposta);
}

buscarProdutos();