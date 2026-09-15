/* DESAFIO FINAL — Simulando um trabalho real de Front-End

Agora vamos sair dos exercícios isolados.

Imagine que você trabalha em um e-commerce.

O Back-End enviou para o Front-End esta informação: */

/* 
Seu trabalho é preparar esses dados para serem exibidos na interface.

Requisito 1 — Nome do cliente. Dexar tudo maiúsculo.

Requisito 2 — Converter preços. Converta para número. Depois formate para 2 casas decimais.

Requisito 3 — Converter quantidade. Transforme: em números.

Requisito 4 — Calcular subtotal.
Para cada produto: preço × quantidade
Por exemplo:
Notebook Lenovo
3499.999 × 2

Requisito 5 — Calcular total da compra.
Some o subtotal de todos os produtos.
O resultado deve ser exibido com duas casas decimais.

Requisito 6 — Categorias.
Transforme: "Informática,Periféricos,Eletrônicos" em um array. 
Depois mostre cada categoria.

Requisito 7 — Busca.
Crie uma funcionalidade que permita verificar se existe determinado produto.
Por exemplo: "Mouse" deve encontrar: Mouse Logitech
Mas: "Celular" não deve encontrar.
A busca deve ignorar maiúsculas e minúsculas.
 */


const respostaAPI = {
    cliente: {
        nome: "  joÃO da SILVA "
    },

    produtos: [
        {
            nome: "Notebook Lenovo",
            preco: "3499.999",
            quantidade: "2"
        },
        {
            nome: "Mouse Logitech",
            preco: "149.90",
            quantidade: "1"
        },
        {
            nome: "Teclado Mecânico",
            preco: "299.999",
            quantidade: "1"
        }
    ],

    categorias: "Informática,Periféricos,Eletrônicos"
}

const nomeCliente = respostaAPI.cliente.nome.toUpperCase()

const produtosCliente = respostaAPI.produtos.slice()

let totalDaCompra = 0

function somarSubTotal(novoObjeto){
    totalDaCompra += novoObjeto.subTotal
}

produtosCliente.forEach((produto) => {
    //console.log(produto)
    produto.preco = Number(Number(produto.preco).toFixed(2))
    produto.quantidade = Number(produto.quantidade)

    produto.subTotal = produto.preco * produto.quantidade
    //console.log(typeof produto)

    somarSubTotal(produto)
})

const totalDoisDigito = totalDaCompra.toFixed(2)

const categorias = respostaAPI.categorias.split(',')

let busca = 'mouse'
let produtoEncontrado = ''

produtosCliente.forEach((produto) => {
    let convertido = produto.nome.toLocaleLowerCase()
    //console.log(convertido)

    if(convertido.includes(busca)){
        produtoEncontrado = produto.nome
        return
    }
})

function resumoDoPedido(){
    console.log(`
     ===========================
           RESUMO DO PEDIDO   
     ===========================
     
     Cliente: ${nomeCliente}

     PRODUTOS

     ${produtosCliente[0].nome}
     Preço: R$ ${produtosCliente[0].preco}
     Quantidade: ${produtosCliente[0].quantidade}
     Subtotal: ${produtosCliente[0].subTotal}
    
     ${produtosCliente[1].nome}
     Preço: R$ ${produtosCliente[1].preco}
     Quantidade: ${produtosCliente[1].quantidade}
     Subtotal: ${produtosCliente[1].subTotal}

     ${produtosCliente[2].nome}
     Preço: R$ ${produtosCliente[2].preco}
     Quantidade: ${produtosCliente[2].quantidade}
     Subtotal: ${produtosCliente[2].subTotal}

     -------------------------------------------------

     TOTAL: R$ ${totalDoisDigito}

     -------------------------------------------------

     CATEGORIAS

     ${categorias[0]}
     ${categorias[1]}
     ${categorias[2]}

     -------------------------------------------------

     Busca: "${busca}"

     Produto encontrado:
     ${produtoEncontrado}
    `)
}

resumoDoPedido()

