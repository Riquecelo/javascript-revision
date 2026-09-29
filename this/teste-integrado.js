function apresentar(cargo, empresa) {
    console.log(
        `${this.nome} trabalha como ${cargo} na empresa ${empresa}.`
    );
}

const usuario1 = {
    nome: "Marcelo"
};

const usuario2 = {
    nome: "Carlos"
};

apresentar.call(usuario1, "Front-End Developer", "VTEX");

apresentar.apply(usuario2, ["Back-End Developer", "Google"]);

const apresentarMarcelo = apresentar.bind(
    usuario1,
    "Front-End Developer",
    "VTEX"
);

apresentarMarcelo();