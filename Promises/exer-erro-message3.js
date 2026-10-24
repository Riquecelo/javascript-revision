function buscarEstoque() {
    throw new Error("Servidor de estoque indisponível!");
}

function carregarEstoque() {
    try {
        buscarEstoque();
    } catch (erro) {
        console.log("Não foi possível carregar o estoque");
        console.log(erro.message);
    }

    console.log("Finalizando consulta");
}

carregarEstoque();

/*
Sem executar o código, responda:
1. Quantas mensagens serão exibidas no console?
2. Qual será a sequência exata dessas mensagens?
3. Por que a mensagem original do erro é exibida mesmo depois de o catch imprimir outra mensagem?
*/