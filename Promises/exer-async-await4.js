async function buscarNome() {
    return "Ana";
}

async function exemplo() {
    const nome = buscarNome();

    console.log(nome);
}

exemplo();

/*
1. O console.log(nome) exibirá "Ana" ou uma Promise?
2. Qual é a diferença entre const nome = buscarNome() e const nome = await buscarNome() dentro dessa função async?
*/