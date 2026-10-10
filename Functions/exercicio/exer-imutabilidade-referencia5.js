//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//Exercício 5: duas atualizações imutáveis

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
        produto: {
            nome: "Notebook",
            preco: 4000
        }
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
        produto: {
            nome: "Mouse",
            preco: 200
        }
    }
];

/*
O sistema recebeu duas atualizações para o pedido do Marcelo:
- A cidade do cliente deve mudar de "Bragança" para "Belém".
- O preço do produto deve mudar de 4000 para 3500.
Precisamos realizar as duas atualizações sem modificar o array original.

Sua missão
Crie um novo array chamado pedidosAtualizados, utilizando map().
Requisitos:
1. Identifique o pedido cujo cliente se chama "Marcelo".
2. Atualize cliente.endereco.cidade para "Belém".
3. Atualize produto.preco para 3500.
4. Preserve todas as outras propriedades.
5. Não modifique o array pedidos original.
6. Para os pedidos que não precisam de alteração, preserve o objeto original.
*/

const pedidosAtualizados = pedidos.map((pedido) => {
    if(pedido.cliente.nome === "Marcelo") {
        return {
            ...pedido,
            cliente: {
                ...pedido.cliente,
                endereco: {
                    ...pedido.cliente.endereco,
                    cidade: "Belém"
                }
            },
            produto: {
                ...pedido.produto,
                preco: 3500
            }
        }
    }
    return pedido
})
