//this × Arrow Function

/* const usuario = {
    nome: "Marcelo",

    apresentar() {
        console.log(this.nome);
    }
};

usuario.apresentar(); */

const usuario = {
    nome: "Marcelo",

    apresentar: () => {
        console.log(this.nome); //Arrow Function não cria seu próprio this.
    }
};

const usuario1 = {
    nome: "Henrique",

    //Arrow Function não cria um novo this. Ela aproveita o this da função externa.
    apresentar () { 
        const mostrarNome = () => {
            console.log(this.nome)
        }
        mostrarNome()
    }
}

usuario1.apresentar()

const usuario2 = {
    nome: "Marcelo",

    apresentar() {
        setTimeout(() => {
            console.log(this.nome);
        }, 1000);
    }
};

//usuario2.apresentar()

const usuario3 = {
    nome: "Santos",

    apresentar: usuario1.apresentar
}

usuario3.apresentar()