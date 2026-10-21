async function buscarNomeProduto() {
    return "Monitor LG";
}

async function montarMensagem() {
    const nome = await buscarNomeProduto();

    return `Produto selecionado: ${nome}`;
}

montarMensagem().then((mensagem) => {
    console.log(mensagem);
});

/*
O que a variável nome recebe: uma Promise ou uma string?
Qual texto a função montarMensagem() retorna por meio de sua Promise?
Por que precisamos usar await nessa linha, em vez de simplesmente escrever const nome = buscarNomeProduto()?
*/