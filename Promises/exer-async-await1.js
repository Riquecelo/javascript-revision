async function buscarProduto() {
    return "Teclado";
}

async function exibirProduto() {
    const produto = await buscarProduto();

    console.log(produto);
}

exibirProduto();

/*
Sem await, uma chamada a buscarProduto() retorna uma Promise. Com await, dentro da função async, a execução da função aguarda a resolução dessa Promise e a expressão fornece seu valor cumprido — neste caso, a string "Teclado".

Uma observação importante: await não bloqueia toda a aplicação JavaScript. Ele suspende a execução daquela função assíncrona até que a Promise seja resolvida ou rejeitada.
*/