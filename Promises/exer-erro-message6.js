function carregarProduto() {
    throw "Erro inesperado";
}

try {
    carregarProduto();
} catch (erro) {
    if (erro instanceof Error) {
        console.log(erro.message);
    } else {
        console.log("Falha ao carregar produto");
    }
}

/*
Sem executar, responda:
1. Qual mensagem será exibida?
2. Qual condição do if será avaliada como verdadeira ou falsa?
3. Por que o código não tenta acessar erro.message nesse caso?
*/