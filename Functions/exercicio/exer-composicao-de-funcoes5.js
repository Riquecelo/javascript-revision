//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 5 — reduce() + composição

function aplicarDesconto(preco) {
    return preco * 0.9;
}

function adicionarFrete(preco) {
    return preco + 10;
}

function calcularPrecoFinal(produto) {
    return adicionarFrete(aplicarDesconto(produto.preco));
}

const produtos = [
    { nome: "Livro", preco: 50 },
    { nome: "Fone", preco: 200 },
    { nome: "Cadeira", preco: 500 }
];


const produtosPromocionais = produtos.reduce((acumulador, produto) => {
    const precoFinal = calcularPrecoFinal(produto);

    if (precoFinal < 200) {
        return [
            ...acumulador,
            {
                ...produto,
                precoFinal
            }
        ];
    }

    return acumulador;
}, []);

console.log(produtosPromocionais)