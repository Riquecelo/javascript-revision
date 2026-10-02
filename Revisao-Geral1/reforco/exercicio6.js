/* 🏋️ Maratona de Reforço — Tarefa 2
🛒 Sistema de pedidos

Você recebeu da API os pedidos de um cliente:*/

const pedido = {
    cliente: {
        nome: "Marcelo",
        cidade: "Bragança"
    },

    produtos: [
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
        }
    ],

    frete: 50
};

/*O sistema precisa preparar os dados para a tela de checkout.

🎯 Requisitos
1. Atualizar o cliente
O cliente mudou de cidade para "Belém".
Crie um novo objeto pedidoAtualizado sem modificar pedido.
O restante das informações deve permanecer igual.*/
const pedidoAtualizado = {
    ...pedido,
    cliente: {
        ...pedido.cliente,
        cidade: "Belém"
    }
}
//console.log(pedido)
//console.log(pedidoAtualizado)

/*2. Preparar os produtos
A tela de checkout não precisa receber o preço individual diretamente.
Para cada produto, precisamos gerar:
{
    nome: "Mouse",
    quantidade: 2,
    subtotal: 400
}
O subtotal deve ser calculado através de:
preço × quantidade*/
const { produtos } = pedidoAtualizado
const resumoProduto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        quantidade: produto.quantidade,
        subtotal: produto.preco * produto.quantidade,
    }
})
//console.log(resumoProduto)

/*3. Calcular o total dos produtos
Some os subtotais.
Nesse caso:
Notebook → 3000
Mouse    → 400
Teclado  → 400

Total → 3800*/
const total = resumoProduto.reduce((cont, produto) => {
    return cont + produto.subtotal
},0)
//console.log(total)

/*4. Regra do frete
Crie uma lógica para calcular o valor final do frete:
Se o total dos produtos for maior ou igual a R$ 3.500, frete grátis.
Caso contrário, mantém os R$ 50.*/

function calculaFrete(total){
    if(total >= 3500){
        return 0
    }
    return pedido.frete
}
const freteCalculalo =  calculaFrete(total)

//console.log(freteCalculalo)


/*5. Criar o resumo do checkout
O resultado final deve ter esta estrutura:
{
    cliente: {
        nome: "Marcelo",
        cidade: "Belém"
    },

    produtos: [
        {
            nome: "Notebook",
            quantidade: 1,
            subtotal: 3000
        },
        {
            nome: "Mouse",
            quantidade: 2,
            subtotal: 400
        },
        {
            nome: "Teclado",
            quantidade: 1,
            subtotal: 400
        }
    ],

    totalProdutos: 3800,
    frete: 0,
    totalFinal: 3800
}*/


const resumo = {
    ...pedidoAtualizado,
    produtos: resumoProduto,
    totalProdutos: total,
    frete: freteCalculalo,
    totalFinal: total + freteCalculalo
} 

console.log(resumo)