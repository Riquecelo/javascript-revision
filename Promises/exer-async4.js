/*
Imagine que você está desenvolvendo uma tela de produtos em uma aplicação Front-End.

Complete a função para que ela retorne o nome do produto por meio de uma Promise cumprida.
*/

async function buscarProduto() {
    // Complete aqui
    return "Teclado"
}

buscarProduto().then((produto) => {
    console.log(produto);
});

/*
O resultado esperado no console é: Teclado
Sua tarefa: escreva apenas o corpo que colocaria dentro de buscarProduto(), incluindo a instrução necessária para produzir esse resultado.
*/

/*
Retorno da função async: uma Promise.
Valor recebido pelo .then(): o valor com o qual essa Promise foi cumprida.
*/