//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//Exercício 7: Filtrando pedidos

const pedidos = [
    { id: 1, cliente: "Marcelo", total: 4000 },
    { id: 2, cliente: "Ana", total: 200 },
    { id: 3, cliente: "Carlos", total: 1500 },
    { id: 4, cliente: "Maria", total: 800 }
];

/* Sua tarefa é criar um novo array chamado pedidosCaros, contendo somente os pedidos cujo total seja maior que 1000.
Requisitos:
1. Utilize filter().
2. Não modifique o array original.
3. Não crie um array manualmente com os resultados.
4. Explique por que filter() é mais apropriado que map() para essa tarefa. */


const pedidosCaros = pedidos.filter((pedido) => {
    return pedido.total > 1000
})

console.log(pedidosCaros)