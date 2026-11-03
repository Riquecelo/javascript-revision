async function buscarProdutos() {
    const resposta = await fetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    // Seu código de análise começa aqui
    console.log(resposta.status)
}

buscarProdutos()