/*
- try: tenta executar esta operação.
- catch: se ocorrer um erro, receba-o e decida como lidar com ele.
O try/catch não faz a operação dar certo. Ele permite que você reaja quando algo dá errado.
*/
async function buscarProduto() {
    throw new Error("Deu ruim!")
}

async function carregarProduto() {
    try {
        const produto = await buscarProduto();

        console.log(produto);
    } catch (erro) {
        console.log("Não foi possível carregar o produto.");
    }
}

carregarProduto()
/*
Considere que buscarProduto() representa uma operação assíncrona que pode ser concluída com sucesso ou rejeitada.

Vamos observar o comportamento:

Cenário A — a busca funciona
1. O código entra no try.
2. await recebe o resultado da operação.
3. A execução chega ao console.log(produto).
4. O catch não é executado.
Cenário B — a busca falha
1. O código entra no try.
2. A operação é rejeitada.
3. O await lança o erro naquele ponto da execução.
4. O restante do try é interrompido.
5. O controle passa para o catch.
Repare em um detalhe importante: quando uma Promise aguardada pelo await é rejeitada dentro do try, o catch pode capturar esse erro.

O parâmetro erro recebe o erro capturado. Você pode utilizá-lo para entender o que aconteceu, registrar informações ou apresentar uma mensagem apropriada ao usuário.
*/