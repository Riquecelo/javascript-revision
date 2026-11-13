function validarPreco(preco) {
    if (preco <= 0) {
        throw new Error("O preço precisa ser maior que zero");
    }

    return "Preço válido";
}

try {
    const resultado = validarPreco(0);
    console.log(resultado);
} catch (erro) {
    console.log(erro.message);
}

//O que será exibido no console?