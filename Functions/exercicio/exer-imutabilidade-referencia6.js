//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//Exercício 6: atualização imutável de objetos dentro de arrays aninhados

const pedidos = [
    {
        id: 1,
        cliente: {
            nome: "Marcelo"
        },
        produtos: [
            {
                id: 101,
                nome: "Notebook",
                preco: 4000
            },
            {
                id: 102,
                nome: "Mouse",
                preco: 200
            }
        ]
    },
    {
        id: 2,
        cliente: {
            nome: "Ana"
        },
        produtos: [
            {
                id: 201,
                nome: "Teclado",
                preco: 350
            },
            {
                id: 202,
                nome: "Monitor",
                preco: 1200
            }
        ]
    }
];


/*Seu desafio
O sistema recebeu a seguinte solicitação:
Atualize o preço do Mouse, do pedido de Marcelo, de R$ 200 para R$ 150.

Crie um novo array chamado pedidosAtualizados, respeitando estas regras:
1. Encontre o pedido cujo cliente se chama "Marcelo".
2. Dentro desse pedido, encontre o produto cujo nome é "Mouse".
3. Atualize o preço desse produto para 150.
4. Preserve todos os outros dados.
5. Não modifique o array original pedidos.
6. Não crie cópias desnecessárias dos pedidos e produtos que não precisam ser alterados.
*/


const pedidosAtualizados = pedidos.map((pedido) => {
    if(pedido.cliente.nome === "Marcelo") {
        return {
            ...pedido,
            produtos: pedido.produtos.map((produto) => {
                if(produto.nome === "Mouse") {
                    return {
                        ...produto,
                        preco: 150
                    }
                }
                return produto
            })
        }
    }
    return pedido
})


