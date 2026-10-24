function carregarProdutos() {
    throw new Error("API indisponível");
}

try {
    carregarProdutos();
} catch (erro) {
    console.log("Não foi possível carregar os produtos. Tente novamente.");
    console.error("Erro técnico:", erro.message);
}

/*
Sem executar o código, responda:
1. Qual mensagem será exibida para o usuário?
2. Qual informação será registrada para diagnóstico técnico?
3. Por que usamos erro.message em vez de exibir diretamente o objeto erro nesse segundo registro?
*/