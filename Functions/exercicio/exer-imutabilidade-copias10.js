//Imutabilidade = não alterar diretamente o dado original.

//Exercício 10 — Encontrando a referência compartilhada

const pedido = {
    cliente: {
        nome: "Marcelo",
        endereco: {
            cidade: "Bragança"
        }
    }
};

const copiaPedido = {
    ...pedido
};

copiaPedido.cliente.endereco.cidade = "Belém";

console.log(pedido.cliente.endereco.cidade);


/* Perguntas
1. O que será exibido?
R= Será exibido Belém

2. Por que isso acontece mesmo tendo feito: 
const copiaPedido = {
    ...pedido
};
R= A alteração é feita em un nével mais interno do objeto,e esse nível não foi feito uma cópia, foi feito uma referência com isso o copiaPedido altera os dois objetos. 


//3. Qual seria a estrutura necessária para alterar cidade somente na cópia?
R=  
const copiaPedido = {
    ...pedido,
    cliente:{
        ...pedido.cliente,
        endereco: {
            ...pedido.cliente.endereco
        }
    }
};
 */
