const promessa = new Promise((resolve) => {
    resolve("Produtos carregados!");
});

promessa.then((resultado) => {
    console.log(resultado);
});

/////////////////////////////////////////////////


const promessa2 = new Promise((resolve) => {
    resolve("React");
});

promessa2.then((linguagem) => {
    console.log("Estudando " + linguagem);
});

//O .then() também retorna uma nova Promise. Isso permite encadear operações assíncronas, algo muito utilizado ao trabalhar com APIs.