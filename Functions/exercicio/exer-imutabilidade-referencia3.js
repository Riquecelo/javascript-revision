//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

//🏆 Desafio de consolidação — Sistema de pedidos
//Imagine que você recebeu os dados de um pedido de uma API:

const pedido = {
    cliente: {
        nome: "Marcelo",
        endereco: {
            cidade: "Bragança"
        }
    },
    produto: {
        nome: "Notebook",
        preco: 3500
    }
};

const copia = {
    ...pedido,
    cliente: {
        ...pedido.cliente
    }
};

copia.cliente.nome = "Carlos";
copia.cliente.endereco.cidade = "Belém";
copia.produto.preco = 4000;

//Parte 1 — Preveja os resultados
//Sem executar o código, diga o que será exibido em cada console.log:
console.log(pedido.cliente.nome); //Marcelo
console.log(copia.cliente.nome); //Carlos

console.log(pedido.cliente.endereco.cidade); //Belém
console.log(copia.cliente.endereco.cidade); //Belém

console.log(pedido.produto.preco); //4000
console.log(copia.produto.preco); //4000

//Parte 2 — Analise as referências
//Agora responda se cada expressão retorna true ou false:

console.log(pedido === copia); //false

console.log(pedido.cliente === copia.cliente); //false

console.log(pedido.cliente.endereco === copia.cliente.endereco); //true

console.log(pedido.produto === copia.produto); //true

/* Parte 3 — Explique seu raciocínio
Por que copia.cliente.nome pode ser alterado sem modificar pedido.cliente.nome, mas a alteração de copia.cliente.endereco.cidade afeta os dois objetos?
R= Neste caso foi feito a copia via spread em alguns níveis e no restante foi compartilhado o objeto. 
*/




