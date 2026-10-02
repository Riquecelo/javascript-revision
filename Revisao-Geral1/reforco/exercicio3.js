/* Exercício 3 — Classe Produto

Você está desenvolvendo uma funcionalidade de estoque para uma loja virtual.

Implemente a classe Produto com as seguintes características:

O construtor recebe nome, preco e estoque.

O método aplicarDesconto(percentual) reduz o preço de acordo com o percentual informado.

O método vender(quantidade) reduz o estoque, mas somente se houver unidades suficientes.

Depois, crie este produto:

const produto1 = new Produto("Notebook", 3000, 10);

Aplique um desconto de 10% e venda 3 unidades. Por fim, exiba o nome, o preço atualizado e o estoque restante.

Sua missão: escreva a classe e o código que executa essas operações. Não precisa adicionar validações além das solicitadas; vamos avaliar a estrutura da classe, o uso do this e a atualização dos dados. */

class Produto {
    constructor (nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque
    }

    aplicarDesconto (percentual) {
        this.preco = this.preco - (this.preco * percentual/100 )
    }

    vender (quantidade) {

        this.estoque -= quantidade 
    }
}

const produto1 = new Produto("Notebook", 3000, 10);

console.log(produto1)
produto1.aplicarDesconto(10)
produto1.vender(3)

console.log(produto1)

/**
 * Correção
 * OBS: Há apenas um requisito que falta implementar: impedir uma venda quando não houver estoque suficiente. Também falta exibir o resultado final após as operações.
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

const produto1 = new Produto("Notebook", 3000, 10);

produto1.aplicarDesconto(10);
produto1.vender(3);

console.log(produto1.nome);
console.log(produto1.preco);
console.log(produto1.estoque);
 * 
 * 
 */