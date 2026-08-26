/*
🎯 Desafio 7 — Situação real de Front-End
Agora vamos juntar tudo.
Imagine que o usuário entrou na página de produtos.
Você precisa:

1. Criar um novo produto
Utilizando sua função construtora:
Moletom Adidas
R$300
Estoque: 7
Categoria: Roupas

2. Adicionar esse produto ao array*/


const produtos = [
    {
        nome: "Camiseta Nike",
        preco: 120,
        estoque: 10,
        categoria: "Roupas"
    },
    {
        nome: "Tênis Adidas",
        preco: 350,
        estoque: 5,
        categoria: "Calçados"
    },
    {
        nome: "Boné Puma",
        preco: 80,
        estoque: 0,
        categoria: "Acessórios"
    },
    {
        nome: "Jaqueta Nike",
        preco: 450,
        estoque: 3,
        categoria: "Roupas"
    }
];

function Criarproduto(nome, preco, estoque, categoria){
    this.nome = nome 
    this.preco = preco
    this.estoque = estoque
    this.categoria = categoria
}

let novoProduto = new Criarproduto('Moletom Adidas', 300, 7, 'Roupas')
let novoProduto2 = new Criarproduto('Camiseta Misuno', 85, 7, 'Roupas')

produtos.push(novoProduto)
produtos.push(novoProduto2)
//console.log(produtos)
//console.log(novoProduto)


/*
3. Processar os produtos
Utilize sua função: processarProdutos() com um callback.

4. Dentro do callback
Verifique se o produto está disponível.
Se estiver: Produto disponível: NOME
Se não estiver: Produto indisponível: NOME
*/
function processarProdutos(produto, callback){
    return callback(produto)
}

console.log(processarProdutos(produtos[2], (produto)=>{
    if(produto.estoque <= 0){
        return `Produto indisponível: ${produto.nome}`
    }else{
        return `Produto disponível: ${produto.nome}`
    }
}))

/*
5. Para os produtos disponíveis
Calcule um desconto de 10% utilizando sua função nomeada: calcularDesconto()
E mostre:
Camiseta Nike
Preço original: R$120
Preço com desconto: R$108
*/

function calcularDesconto(produto, desconto){
    if(produto.estoque <= 0){
        return `Produto indisponível: ${produto.nome}`
    }else{
        let valorDesconto = produto.preco * (desconto/100) 
        let novoValor = produto.preco - valorDesconto
        // console.log(desconto/100)

        return `
        ${produto.nome}
        Preço original: ${produto.preco}
        Preço com desconto: ${novoValor}
        `
    }
}

console.log(calcularDesconto(produtos[0], 10))