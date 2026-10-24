function buscarProduto() {
    throw new Error("Produto não encontrado!");
}

try {
    buscarProduto();
} catch (erro) {
    console.log(erro);
    console.log(erro.message);
}

/*
# erro é o objeto recebido pelo catch.
# erro.message é uma propriedade desse objeto.
# console.log(erro) exibe o objeto inteiro e oo stack trace (rastreamento da pilha), que mostra onde o erro foi criado e por quais funções passou.
# console.log(erro.message) exibe somente a mensagem.
*/