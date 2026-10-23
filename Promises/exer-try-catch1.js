async function buscarProduto() {
    //throw new Error("Deu ruim!")

    return "Deu certo!"
}

async function carregarProduto() {
    try {
        console.log("1 - Iniciando busca");

        const produto = await buscarProduto();

        console.log("2 - Produto carregado");

    } catch (erro) {
        console.log("3 - Falha ao carregar produto");
    }

    console.log("4 - Fim da função");
}

carregarProduto()

/*
Cenário A — buscarProduto() é concluída com sucesso.
Quais mensagens aparecem e em qual ordem?

Cenário B — buscarProduto() é rejeitada.
Quais mensagens aparecem e em qual ordem?
*/