//Executa a função imediatamente, passando os argumentos em array.
function apresentar(cidade, cargo) {
    console.log(
        `${this.nome} mora em ${cidade} e trabalha como ${cargo}.`
    );
}

const usuario = {
    nome: "Marcelo"
};

apresentar.apply(usuario, ["Tucuruí", "Desenvolvedor"]);

