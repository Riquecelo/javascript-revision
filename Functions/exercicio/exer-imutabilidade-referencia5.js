//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//Exercício prático — Atualização de pedidos

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
    },
    {
        id: 3,
        cliente: {
            nome: "Carlos",
            endereco: {
                cidade: "Castanhal",
                estado: "PA"
            }
        },
        produto: {
            nome: "Teclado",
            preco: 350
        }
    }
];


/*Desafio 1 — Atualização simples
Crie um novo array chamado pedidosAtualizados usando map().
Requisitos:
1. Encontre o pedido cujo cliente se chama "Marcelo".
2. Atualize a cidade desse cliente para "Belém".
3. Preserve todas as outras propriedades.
4. Não modifique o array pedidos original.
*/

const pedidosAtualizados = pedidos.map((pedido) => {
    if(pedido.cliente.nome === "Marcelo"){
        return{
            ...pedido,
            cliente: {
                ...pedido.cliente,
                endereco: {
                    ...pedido.cliente.endereco,
                    cidade: "Belém"
                }
            }
        }
    }

    return pedido
}) 