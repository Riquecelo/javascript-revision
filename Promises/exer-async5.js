async function buscarNome() {
    return "Ana";
}

const resultado = buscarNome();

resultado.then((nome) => {
    console.log(nome);
});