// O try/catch funciona tanto em funções síncronas quanto em funções assíncronas.

//1. try/catch em uma função síncrona
function calcularPreco(preco, quantidade) {
    try {
        if (preco < 0) {
            throw new Error("Preço inválido");
        }

        return preco * quantidade;

    } catch (erro) {
        console.log(erro.message);
        return 0;
    }
}

console.log(calcularPreco(-10, 2));

/*
O que acontece?
1. A função recebe o preço -10.
2. A condição preco < 0 é verdadeira.
3. throw new Error() lança um erro.
4. O catch captura esse erro.
5. A função retorna 0.

Perceba: não precisamos de async, await ou Promise. O try/catch consegue capturar o erro síncrono diretamente.
*/