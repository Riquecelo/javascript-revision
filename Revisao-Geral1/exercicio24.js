/* ☠️ BOSS FINAL — Simulação de entrevista técnica

Agora quero que você resolva sem eu dizer qual recurso do JavaScript deve usar.

Imagine que você recebeu esta tarefa no trabalho:

“Precisamos montar o resumo do carrinho de compras para o checkout.”

Dados:*/

const carrinho = [
    {
        id: 1,
        produto: "Notebook",
        preco: 3500,
        quantidade: 1
    },
    {
        id: 2,
        produto: "Mouse",
        preco: 150,
        quantidade: 2
    },
    {
        id: 3,
        produto: "Teclado",
        preco: 300,
        quantidade: 1
    }
];

/*O sistema precisa:

1.Descobrir o valor de cada item:
Notebook → 3500
Mouse → 300
Teclado → 300*/
const valorCadaItem = carrinho.map((produto) => {
    return `${produto.produto} -> ${produto.preco}`
})
//console.log(valorCadaItem)

/*2.Descobrir o valor total da compra.*/
const valorTotalCompra = carrinho.reduce((cont, produto) => {
    return cont += produto.preco * produto.quantidade
},0)
//console.log(valorTotalCompra)

/*3.Descobrir quantos produtos existem no carrinho.*/
const totalProdutos = carrinho.reduce((cont, produto) => {
    return cont += produto.quantidade
},0)
//console.log(totalProdutos)

/*4.Verificar se existe algum produto com quantidade maior que 1.*/
const produtoMaiorQuantidade = carrinho.some((produto) => produto.quantidade > 1)
//console.log("Existe algum produto com quantidade maior que 1? ", produtoMaiorQuantidade)

/*5.Encontrar o produto de id: 2.*/
const busca = carrinho.find((produto) => produto.id === 2)
//console.log(busca)

/*6.Criar uma nova estrutura contendo somente:

{
    produto: "...",
    total: ...
}*/

const resumoCarrinho = carrinho.map((produto) => {
    return {produto: produto.produto, total: produto.preco * produto.quantidade}
})
//console.log(resumoCarrinho)

/*7.Ordenar os produtos pelo valor total, do maior para o menor.*/
resumoCarrinho.sort((a,b) => a.total - b.total)
//console.log(resumoCarrinho)

/*8.Criar uma cópia do carrinho adicionando:
cupom: "DEV10"
sem alterar o carrinho original.*/
const carrinhoAtualizado = {...carrinho, cupom: "DEV10"}
//console.log(carrinhoAtualizado)

/*9.Criar uma classe ItemCarrinho com:

produto
preco
quantidade

e um método: calcularTotal()

que retorne:preco × quantidade

10.Criar três instâncias da classe utilizando os produtos do carrinho. */

class ItemCarrinho {
    constructor(produto, preco, quantidade){
        this.produto = produto,
        this.preco = preco,
        this.quantidade = quantidade
    }

    calcularTotal(){
        return this.preco * this.quantidade
    }
}

const item1 = new ItemCarrinho('Notebook',3500,1)
const item2 = new ItemCarrinho('Mouse',150,2)
const item3 = new ItemCarrinho('Teclado',300,1)

console.log(item1)
console.log(item2.calcularTotal())