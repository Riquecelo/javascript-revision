/*1. O que são efeitos colaterais?
Um efeito colateral acontece quando uma função faz alguma coisa além de calcular e retornar um resultado, afetando algo fora do seu próprio contexto.
Por exemplo, uma função pode:
- Modificar um objeto recebido como argumento.
- Alterar uma variável externa.
- Exibir uma mensagem no console.
- Modificar o conteúdo de uma página HTML.
- Fazer uma requisição a uma API.

Um detalhe importante: nem todo efeito colateral é necessariamente um erro. Em aplicações frontend, por exemplo, precisamos interagir com o DOM, fazer requisições e atualizar interfaces. O importante é saber identificar e controlar esses efeitos.
*/

//Exercício 2 — Encontre o efeito colateral escondido
//Agora vamos aumentar um pouco a dificuldade. Você receberá um código que parece correto à primeira vista, mas contém um comportamento que pode causar problemas.

const carrinho = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 100 }
];

function aplicarDesconto(carrinho, percentual) {
    return carrinho.map((produto) => {
        produto.preco -= produto.preco * percentual / 100;

        return produto;
    });
}

//const carrinhoComDesconto = aplicarDesconto(carrinho, 10);

/* console.log(carrinho[0].preco);
console.log(carrinhoComDesconto[0].preco);
console.log(carrinho === carrinhoComDesconto);//Não — atenção: no código, o resultado é false, pois map() criou um novo array.
console.log(carrinho[0] === carrinhoComDesconto[0]); */

/*
Sem executar o código, responda:
1. Qual será o resultado de cada um dos quatro console.log()?
R= primeiro console 2700, segundo console 2700, terceiro console false, quarto console true.
2. A função cria um novo array?
R= Sim
3. Mesmo criando um novo array, ela modifica algum dado original? Explique.
R= Sim, modifica o objeto original por justamente alterar suas propriedades diretamente.
4. Qual é o efeito colateral presente nesse código?
R= Alteração no objeto original.
*/

/*
3. Agora é sua vez: corrija o código
Queremos aplicar o desconto sem modificar o carrinho original.
*/

const aplicarDescontos = (carrinho, desconto) => {
    return carrinho.map((produto) => {
        return {
            produto,
            preco: produto.preco - produto.preco * desconto / 100
        }
    })
}

const carrinhoComDesconto2 = aplicarDescontos(carrinho, 10)

console.log(carrinho)
console.log(carrinhoComDesconto2)