//Imutabilidade = não alterar diretamente o dado original.

//🏆 Desafio de Consolidação — Imutabilidade

const pedidos = [
    {
        id: 1,
        cliente: {
            nome: "Marcelo",
            endereco: {
                cidade: "Bragança",
                estado: "PA"
            }
        },
        produtos: [
            {
                nome: "Notebook",
                preco: 3500,
                quantidade: 1
            },
            {
                nome: "Mouse",
                preco: 150,
                quantidade: 2
            }
        ]
    },
    {
        id: 2,
        cliente: {
            nome: "Ana",
            endereco: {
                cidade: "Belém",
                estado: "PA"
            }
        },
        produtos: [
            {
                nome: "Teclado",
                preco: 400,
                quantidade: 1
            }
        ]
    }
];

/* 
🎯 Regra do exercício
Precisamos criar pedidosAtualizados fazendo duas alterações somente no pedido do Marcelo:
1. Alterar a cidade de "Bragança" para "Belém".
2. Alterar a quantidade do "Mouse" de 2 para 3.
E nada do objeto original pedidos pode ser modificado.
*/

const pedidosAtualizados = pedidos.map((pedido) => {
    if(pedido.cliente.nome === "Marcelo"){
        return {
            ...pedido,
            cliente: {
                ...pedido.cliente,
                endereco: {
                    ...pedido.cliente.endereco,
                    cidade: "Belém"
                }
            },
            produtos: pedido.produtos.map((produto) => {
                if(produto.nome === "Mouse"){
                    return{
                        ...produto,
                        quantidade: 3
                    }
                }
                return produto
            }) 
        }
    }
    return pedido
})

console.dir(pedidosAtualizados, {depth: null})

/* 
Depois responda:
1. Qual condição você usaria para identificar o pedido do Marcelo?
2. Como criaria uma cópia imutável de cliente?
3. Como criaria uma cópia imutável de endereco?
4. Como alteraria a cidade para "Belém"?
5. Como criaria um novo array produtos?
6. Como identificaria o "Mouse"?
7. Como criaria o novo objeto do Mouse alterando somente quantidade?
8. Por que o pedido da Ana pode continuar sendo retornado diretamente?
*/

