// Método separado em uma variável perde o contexto do this
const usuario = {
    nome: "Marcelo",

    apresentar() {
        console.log(this.nome);
    }
};

const mostrar = usuario.apresentar;

mostrar() //resposta undefined

const usuario1 = {
    nome: "Santos",
}

usuario1.apresentar = usuario.apresentar

usuario1.apresentar()