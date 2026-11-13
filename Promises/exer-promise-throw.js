const produto = {
    nome: "Teclado",
    preco: 150
};

Promise.resolve(produto)
    .then((produto) => {
        console.log("Produto:", produto.nome);

        if (produto.preco <= 0) {
            throw new Error("Preço inválido");
        }

        return produto.preco;
    })
    .then((preco) => {
        console.log("Preço final:", preco);
    })
    .catch((erro) => {
        console.log("Falha:", erro.message);
    });

/*
Primeiro, imagine que o produto custa 150. Depois, imagine que custa 0.
1. Com o preço 150, quais mensagens aparecem no console?
2. Com o preço 0, quais mensagens aparecem no console?
**3. Quando o preço é 0, por que o segundo .then() não exibe o preço final?
*/