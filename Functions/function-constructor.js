//Função construtora utilizada para criar objetos.
//Por padrão usa a primeira letra maiuscula no nome da função.
//usa o operador 'new'
//cria um novo objeto
//usa a palavra reservada 'this' para referenciar o objeto.

function Persona(nome){
    this.nome = nome
    this.ler = function (){
        return this.nome + ' está lendo.'
    }
}

let marcelo = new Persona('Marcelo')

console.log(marcelo.ler())
console.log(marcelo.nome)
