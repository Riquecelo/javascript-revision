//cria uma nova função com o this definido, para você executar quando quiser.

function apresentar() {
    console.log(`Olá, ${this.nome}!`);
}

const usuario = {
    nome: "Marcelo"
};

const apresentarUsuario = apresentar.bind(usuario);

apresentarUsuario();

//Cenário 1 => bind + call

const usuario1 = {
    nome: "Henrique"
};

const usuario2 = {
    nome: "Carlos"
};

const apresentarUsuario1 = apresentar.bind(usuario1);

apresentarUsuario1.call(usuario2); //call é ignorado

//Cenário 2 => bind + apply

const usuario3 = { nome: "Santos" };
const usuario4 = { nome: "João" };

const funcao = apresentar.bind(usuario3);

funcao.call(usuario4);//call ignorado
funcao.apply(usuario4);//apply ignorado
funcao();