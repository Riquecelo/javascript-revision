Promise.reject(new Error("Acesso negado"))
    .catch((erro) => {
        console.log(erro.message);
    })
    .finally(() => {
        console.log("Fim da operação");
    });


/*
O .catch() será executado?

O .finally() será executado?

Qual será a saída no console?
*/