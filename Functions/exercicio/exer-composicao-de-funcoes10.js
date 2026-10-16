//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 10 — um pequeno desafio


const produtos = [
    { nome: "Livro", preco: 50 },
    { nome: "Fone", preco: 200 },
    { nome: "Cadeira", preco: 500 }
];

/*
Objetivo: criar um novo array que contenha somente os produtos cujo preço final seja inferior a R$ 200, considerando 10% de desconto, e acrescentar a propriedade precoFinal a cada produto selecionado.
*/

// 1. Se o preço final for maior ou igual a 200,
//    não adicione o produto ao acumulador.
// 2. Caso contrário, adicione uma cópia do produto
//    com a propriedade precoFinal.

function calcularPrecoFinal(produto) {
    return produto.preco * 0.9;
}


const resultado = produtos.reduce((acumulador, produto) => {
    const precoFinal = calcularPrecoFinal(produto);

    if(precoFinal < 200){
        return [  
            ...acumulador,
            {
                ...produto,
                precoFinal
            }
        ];
    }

    return acumulador
    
}, []);

console.log(resultado)