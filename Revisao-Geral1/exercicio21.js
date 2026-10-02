/* Exercício 21 — Classe Produto


const produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 10,

    aplicarDesconto (){
        valorDesconto = this.preco - (this.preco * 10 /100)
        return console.log(valorDesconto)
    },

    vender () {
        if(this.estoque > 0){
            this.estoque -= 1 
            console.log(`Um produto ${this.nome} vendido!`)
            console.log(`Estoque atual é de ${this.estoque} produtos diponíveis.`)
        }else{
            console.log(`Produto ${this.nome} indisponível.`)
        }
    }
};

Agora transforme a ideia anterior em uma classe:

class Produto {
    
}

A classe deverá receber no constructor:
nome
preco
estoque

Crie dois produtos:

const produto1 = ...
const produto2 = ...

Cada produto deverá possuir:

nome
preco
estoque

e os métodos:

aplicarDesconto()
vender() */

class Produto {
    
    constructor(nome, preco, estoque){
        this.nome = nome,
        this.preco = preco
        this.estoque = estoque
    }

    aplicarDesconto (){
        valorDesconto = this.preco - (this.preco * 10 /100)
        return console.log(valorDesconto)
    }

    vender () {
        if(this.estoque > 0){
            this.estoque -= 1 
            console.log(`Um produto ${this.nome} vendido!`)
            console.log(`Estoque atual é de ${this.estoque} produtos diponíveis.`)
        }else{
            console.log(`Produto ${this.nome} indisponível.`)
        }
    }
};


const produto1 = new Produto("Sapato", 150, 20)
const produto2 = new Produto("Mochila", 80, 10)

console.log(produto1)
console.log(produto2)

produto1.vender()