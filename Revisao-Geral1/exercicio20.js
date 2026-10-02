/* Exercício 20 — Venda
No mesmo objeto, crie: vender()
Esse método deverá:
reduzir estoque em 1;
impedir a venda quando o estoque estiver 0.

Exemplo: estoque: 10
depois de: produto.vender();
deve ficar: 9 */


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

produto.vender()
