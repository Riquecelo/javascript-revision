//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 3

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


/* 
Sua tarefa: escreva um código que use map() para criar um novo array contendo os preços finais dos três produtos.
Regras:
- Use a função calcularPrecoFinal() que já existe.
- Não altere o array produtos.
- Guarde o novo array em uma variável chamada precosFinais.
*/

const precosFinais = produtos.map((produto) => calcularPrecoFinal(produto) )

//console.log(precosFinais)

/* Próxima etapa: um pequeno ajuste no exercício
Imagine que, em vez de retornar apenas o preço final, você queira preservar o nome do produto e adicionar uma nova propriedade chamada precoFinal.
*/

const precosFinais2 = produtos.map((produto) => {
    return {
        ...produto,
        precoFinal: calcularPrecoFinal(produto)
    }
})

console.log(precosFinais2)