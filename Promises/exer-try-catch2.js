async function carregarEstoque() {
    try {
        await buscarEstoque();
        console.log("Estoque carregado");
    } catch (erro) {
        console.log("Erro ao consultar estoque");
        throw erro;
    }

    console.log("Consulta finalizada");
}

/*
A mensagem "Consulta finalizada" será exibida se buscarEstoque() for rejeitada?

O que acontece com o erro depois que o catch executa throw erro?
*/


