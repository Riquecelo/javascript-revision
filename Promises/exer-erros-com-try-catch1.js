try {
    throw new Error("O preço do produto é inválido");
} catch (erro) {
    console.log(erro.message)
}

/*
Guarde esta distinção:
- erro representa o objeto de erro recebido pelo catch.
- erro.message acessa a mensagem desse objeto.
- console.log(erro.message) exibe a mensagem no console.
A propriedade message não executa o tratamento do erro. Ela apenas permite consultar a mensagem associada a ele.
*/