class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco - (this.preco * percentual / 100);
    }

    vender(quantidade) {
        if (quantidade <= this.estoque) {
            this.estoque -= quantidade;
        } else {
            console.log("Estoque insuficiente!");
        }
    }
}

/*Exercício 4 — Desafio de fixação

Sem copiar o código anterior, considere:

const produto2 = new Produto("Mouse", 200, 5);

O sistema recebe estas operações, nesta ordem:

Vender 3 unidades.

Vender mais 4 unidades.

Aplicar desconto de 20%.

Responda sem executar o código:

Qual será o preço final?

Qual será o estoque final?

Em qual operação a mensagem "Estoque insuficiente!" será exibida?

Por que a segunda venda não deve alterar o estoque?

Esse exercício verifica se você compreendeu a lógica, e não apenas a sintaxe.*/

/*Respostas
Qual será o preço final? R= O preço final será 180.

Qual será o estoque final? R= O estoque final será 2.

Em qual operação a mensagem "Estoque insuficiente!" será exibida? R= Será na chamada do método para vender mais unidades.

Por que a segunda venda não deve alterar o estoque? R= a condição do método só permite quando o estoque é maior ou igual a quantidade da venda.
*/

////////////////////////////////////////////////////

/**
 * Correção
 * Ponto de atenção: você entendeu corretamente a lógica de estoque e a condição quantidade <= this.estoque. O único erro foi aritmético: ao calcular 20% de R$ 200, lembre-se de que 200×0,20=40.
 */