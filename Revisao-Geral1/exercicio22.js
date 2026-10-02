//Exercício 22 — Métodos de classe
class Produto {
    
    constructor(nome, preco, estoque){
        this.nome = nome,
        this.preco = preco
        this.estoque = estoque
    }

    aplicarDesconto (){
        this.preco = this.preco - (this.preco * 10 /100)
    }

    vender () {
        if(this.estoque > 0){
            this.estoque -= 1 
        }else{
            console.log(`Produto ${this.nome} indisponível.`)
        }
    }
};

/* 
Utilizando sua classe anterior:

Produto 1
Notebook
R$ 3000
estoque 10

Aplique desconto de 10%.
Depois faça uma venda.

Produto 2
Mouse
R$ 200
estoque 17

Faça duas vendas.
Depois mostre os dois produtos.
Resultado esperado aproximadamente:
Notebook - R$ 2700 - Estoque: 9
Mouse - R$ 200 - Estoque: 15
*/

const produto1 = new Produto("Notebook", 3000, 10)
const produto2 = new Produto("Mouse", 200, 17)

produto1.aplicarDesconto()
produto1.vender()

produto2.vender()
produto2.vender()

console.log(produto1)
console.log(produto2)