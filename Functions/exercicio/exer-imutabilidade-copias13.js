//Imutabilidade = não alterar diretamente o dado original.

//Precisamos alterar somente o preço do Notebook para R$ 3200, sem modificar produtos.

const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 3500,
        estoque: 5
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 150,
        estoque: 20
    },
    {
        id: 3,
        nome: "Teclado",
        preco: 400,
        estoque: 8
    }
];


const produtosAtualizados = produtos.map(produto => {
    if (produto.nome === "Notebook") {
        return {
            ...produto,
            preco: 3200
        };
    }

    return produto;
});


/* 

1. O que deve entrar no if?
R= Uma comparação para verificar o nome do produto que se quer modificar.

2. O que deve entrar no objeto retornado?
R= Um spread do produto mais a alteração no preço.

3. Por que usamos map() em vez de simplesmente fazer:
produtos[0].preco = 3200;
R= Porque com isso mantemos a regra da imutabilidade, e alteramos somente a copia. 

4. Depois da atualização, quanto vale: produtos[0].preco?
R= Continua com o mesmo valor de 3500

e quanto vale: produtosAtualizados[0].preco? 
R= Fica com o novo valor de 3200
*/


