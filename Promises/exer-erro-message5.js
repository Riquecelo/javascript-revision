try {
    consultarProduto();
} catch (erro) {
    if (erro instanceof Error) {
        console.log(erro.message);
    } else {
        console.log("Ocorreu um erro inesperado");
    }
}

/*
A expressão erro instanceof Error verifica se o valor é uma instância de Error. Se for, podemos acessar sua mensagem com segurança nesse cenário; caso contrário, usamos uma mensagem alternativa.

Isso evita depender de uma propriedade que pode não existir.
*/
