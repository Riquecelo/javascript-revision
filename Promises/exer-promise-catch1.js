const buscarProduto = new Promise((resolve, reject) => {
    reject("Não foi possível carregar o produto.");
});

buscarProduto
    .then((produto) => {
        console.log(produto);
    })
    .catch((erro) => {
        console.log("Erro:", erro);
    });

/*
O que está acontecendo?
1. A Promise é criada.
2. reject() indica que a operação falhou.
3. Como a Promise foi rejeitada, o callback do .then() não é executado.
4. O .catch() recebe o motivo da falha pelo parâmetro erro.
5. O erro é exibido no console.
*/