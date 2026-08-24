/*
🎯 Desafio 6 — Função construtora
Agora imagine que o Back-End começou a enviar novos produtos.
Crie uma função construtora chamada Produto.

Ela deverá receber:
nome
preco
estoque
categoria

⭐ Desafio extra

Adicione à função construtora um método:
mostrarInformacoes()
que mostre:

Produto: Moletom Adidas
Preço: R$300
Estoque: 7
Categoria: Roupas
*/

function Produto (nome,preco,estoque,categoria){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
    this.categoria = categoria
    this.mostrarInformacoes = function(){
        return ( 
            `
            Produto: ${this.nome} 
            Preço: R$${this.preco }
            Estoque: ${this.estoque }
            Categoria: ${this.categoria}
            `
        )
    }
}

let roupa1 = new Produto(
    "Moletom Adidas",
    300,
    7,
    "Roupas"
)

console.log(roupa1)
console.log(roupa1.mostrarInformacoes())