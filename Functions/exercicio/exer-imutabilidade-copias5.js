//Imutabilidade = não alterar diretamente o dado original.
//🔥 Exercício 5 — Agora sem eu indicar onde usar spread

const pedido = {
    cliente: {
        nome: "Marcelo",
        endereco: {
            cidade: "Bragança",
            estado: "PA"
        }
    },

    pagamento: {
        metodo: "Cartão",
        parcelas: 3
    }
};

/* Queremos criar uma cópia onde:
cliente.nome continue "Marcelo"
cliente.endereco.cidade passe para "Belém"
pagamento.metodo continue "Cartão"
pagamento.parcelas passe para 6
o objeto pedido original não pode ser alterado */

const pedidoAtualizado = {
    ...pedido,
    cliente: {
        ...pedido.cliente,
        endereco: {
            ...pedido.cliente.endereco,
            cidade: "Belém"
        }
    },
    pagamento: {
        ...pedido.pagamento,
        parcelas: 6
    }
}

console.log(pedidoAtualizado)