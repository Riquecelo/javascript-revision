async function buscarPreco() {
    return 250;
}

async function calcularPreco() {
    const preco = await buscarPreco();

    return preco * 2;
}

calcularPreco().then((resultado) => {
    console.log(resultado);
});

/*
1. Qual valor a variável preco recebe?
2. Qual valor a função calcularPreco() retorna por meio de sua Promise?
3. O que será exibido no console?
*/