//Imutabilidade = não alterar diretamente o dado original.

//Próximo nível — Exercício 8

const pedido = {
    id: 101,
    cliente: {
        nome: "Marcelo"
    },
    itens: [
        {
            nome: "Notebook",
            quantidade: 1,
            preco: 3500
        },
        {
            nome: "Mouse",
            quantidade: 2,
            preco: 150
        }
    ]
};

/* Precisamos criar pedidoAtualizado onde:
Notebook continua igual.
Mouse passa de 2 para 3 unidades.
O pedido original não pode ser alterado.
Use spread.
Use map() para atualizar o item correto. */

const itemAtualizado = pedido.itens.map((item) => {
    if(item.nome === "Mouse"){
        return {
            ...item,
            quantidade: 3
        }
    }
    return item
})

const pedidoAtualizado = {
    ...pedido,
    itens: itemAtualizado //mantém o formato do array
    
}

console.log(pedidoAtualizado)
