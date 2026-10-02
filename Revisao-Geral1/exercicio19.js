/* Exercício 19 — Método de objeto + estado
Crie um objeto: */

const produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 10,

    aplicarDesconto (){
        valorDesconto = this.preco - (this.preco * 10 /100)
        return console.log(valorDesconto)
    }
};

/* Crie um método:
aplicarDesconto()
que reduza o preço em 10%.

Depois:
produto.aplicarDesconto();
O resultado deverá ser:
2700 */

produto.aplicarDesconto()