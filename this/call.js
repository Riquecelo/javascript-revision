//Executa a função imediatamente, passando os argumentos separadamente.
function apresentar() {
    console.log(`Olá, eu sou ${this.nome}`);
}

const usuario = {
    nome: "Marcelo"
};

apresentar.call(usuario);

//Passando argumentos

function apresentar1(cidade, profissao) {
    console.log(
        `Sou ${this.nome}, moro em ${cidade} e sou ${profissao}.`
    );
}

const usuario1 = {
    nome: "Marcelo"
};

apresentar1.call(usuario1, "Tucuruí", "Desenvolvedor Front-End");

function apresentar2(cargo) {
    console.log(`${this.nome} trabalha como ${cargo}.`);
}

const usuario2 = {
    nome: "Carlos"
};

apresentar2.call(usuario2, "Desenvolvedor");