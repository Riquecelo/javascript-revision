//Imutabilidade = não alterar diretamente o dado original.

//Exercício 9 — Atualizando um item dentro de um pedido

const pedido = {
    id: 101,

    cliente: {
        nome: "Marcelo",
        cidade: "Bragança"
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

/* Precisamos criar pedidoAtualizado com as seguintes alterações:

Cliente: cidade → "Belém"

Produto Mouse: quantidade → 3

Produto Notebook: preço → 3200

O objeto pedido original não pode sofrer nenhuma alteração. */

const pedidoAtualizado = {
    ...pedido,
    cliente: {
        ...pedido.cliente,
        cidade: "Belém"
    },

    itens: pedido.itens.map((item) => {
        if(item.nome === "Notebook"){
            return {
                ...item,
                preco: 3200   
            }
        }else if(item.nome === "Mouse"){
            return {
                ...item,
                quantidade: 3
            }
        }

        return item
    })
}

console.log(pedidoAtualizado)