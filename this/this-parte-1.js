//Em JavaScript, a palavra-chave this é uma referência ao objeto que está executando o código no momento.
const usuario = {
    nome: "Marcelo",

    apresentar() {
        console.log(this.nome);
    }
};

usuario.apresentar();

const usuario2 = {
    nome: "João",

    apresentar: usuario.apresentar //passando a função como valor para a propriedade
};

usuario2.apresentar();

