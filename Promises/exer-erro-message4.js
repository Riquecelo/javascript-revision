function consultarProduto(tipoErro) {
    if (tipoErro === 1) {
        throw new Error("Produto indisponível");
    }

    throw "Falha na consulta";//Neste caso está sendo lançado uma string como erro e não um objeto
}

try {
    consultarProduto(1);
} catch (erro) {
    console.log(erro.message);
}

try {
    consultarProduto(2);
} catch (erro) {
    console.log(erro.message);
}

/*
Sem executar o código, responda:
1. Qual será a saída do primeiro console.log?
2. Qual será a saída do segundo console.log?
3. Qual é a principal diferença entre os valores recebidos pelos dois blocos catch?
*/