//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//Exercício 8: filter() + imutabilidade

const pedidos = [
    {
        id: 1,
        cliente: "Marcelo",
        total: 4000,
        status: "pendente"
    },
    {
        id: 2,
        cliente: "Ana",
        total: 200,
        status: "pago"
    },
    {
        id: 3,
        cliente: "Carlos",
        total: 1500,
        status: "pendente"
    },
    {
        id: 4,
        cliente: "Maria",
        total: 800,
        status: "pago"
    }
];

/*Sua missão
Precisamos criar um novo array chamado pedidosPendentesAtualizados que contenha somente os pedidos pendentes, mas com o status atualizado para "em processamento".

Requisitos
1. O array original pedidos não pode ser modificado.
2. Somente os pedidos com status: "pendente" devem entrar no novo array.
3. Os pedidos selecionados devem receber o novo status "em processamento".
4. Utilize filter() e spread (...) para preservar a imutabilidade.
*/

const pedidosPendentesAtualizados1 = pedidos.filter((pedido) => {
    if(pedido.status === "pendente") {
        return {
            ...pedido,
            status: "em processamento"
        }
    }
    return pedido.status === "pendente"
})

console.log(pedidosPendentesAtualizados1)

const pedidosPendentesAtualizados2 = pedidos.filter((pedido) => pedido.status === "pendente").map((pedido) => {
    return{
        ...pedido,
        status: "em processamento"
    }
})

console.log(pedidosPendentesAtualizados2)