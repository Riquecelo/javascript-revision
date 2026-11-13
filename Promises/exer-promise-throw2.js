Promise.reject("Falha na API")
    .catch((erro) => {
        console.log(erro);
        return "Dados alternativos";
    })
    .then((resultado) => {
        console.log(resultado);
    });

/*
O .catch() também retorna uma Promise. Como o callback dele retorna "Dados alternativos", essa Promise é cumprida com esse valor, permitindo que o próximo .then() o receba.
*/