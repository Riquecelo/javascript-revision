//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//Exercício 9: Desafio de imutabilidade

const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 4000,
        estoque: 5
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 200,
        estoque: 0
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 1500,
        estoque: 3
    },
    {
        id: 4,
        nome: "Teclado",
        preco: 300,
        estoque: 0
    }
];


/*
Crie um novo array chamado produtosDisponiveis que contenha somente os produtos com estoque maior que zero.
Além disso, cada produto selecionado deve receber um desconto de 10% no preço, sem modificar os dados originais.
*/

const produtosDisponiveis = produtos.filter((produto) => produto.estoque > 0).map((produto) => {
    return {
        ...produto,
        preco: produto.preco - (produto.preco * 10/100)
    }
})

console.log(produtosDisponiveis)