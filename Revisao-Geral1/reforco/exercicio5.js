/* 🔥 Vamos para o Desafio Final da Maratona de Reforço.
Aqui vamos juntar os pontos que você praticou: arrays, objetos, map, reduce, this, lógica condicional e transformação de dados.

🏆 Desafio Final — Resumo do Carrinho
Imagine que você recebeu esta tarefa no trabalho:
“Precisamos montar o resumo do carrinho para o checkout.”
Você recebeu os seguintes dados:*/

const carrinho = [
    {
        nome: "Notebook",
        preco: 3000,
        quantidade: 1
    },
    {
        nome: "Mouse",
        preco: 200,
        quantidade: 2
    },
    {
        nome: "Teclado",
        preco: 400,
        quantidade: 1
    },
    {
        nome: "Headset",
        preco: 300,
        quantidade: 3
    }
];

/*O sistema precisa gerar um resumo contendo:

1. Valor de cada item
Para cada produto, precisamos calcular:
preço × quantidade
Exemplo:
Mouse → 200 × 2 = 400*/

const itensCarrinho = carrinho.map((produto) => {
    return {
        nome: produto.nome,
        quantidade: produto.quantidade,
        subTotal: produto.preco * produto.quantidade
    }
})
console.log(itensCarrinho)

/*2. Total do carrinho
Precisamos somar o valor de todos os itens.*/

const total = itensCarrinho.reduce((cont, item) => cont + item.subTotal,0)
console.log(total)

/*3. Aplicar desconto
Se o total do carrinho for maior ou igual a R$ 4.000, aplicar 10% de desconto.
Caso contrário, não aplicar desconto.*/

const aplicaDesconto = (total) => { 
    if(total >= 4000){
        return total * 10/100
    }
    
    return 0
}
let desconto  = aplicaDesconto(total)
console.log(desconto)


/*4. Gerar o resumo final
O resultado deverá ter uma estrutura semelhante a:
{
    itens: [
        {
            nome: "Notebook",
            quantidade: 1,
            subtotal: 3000
        },
        // ...
    ],
    total: 4900,
    desconto: 490,
    totalFinal: 4410
} */
const totalFinal = total - desconto;
const itens = [...itensCarrinho]

const resumo = {
    itens,
    total,
    desconto,
    totalFinal
}

console.log("=====Resumo=====\n", resumo)