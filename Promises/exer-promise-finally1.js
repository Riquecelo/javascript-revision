Promise.resolve(100)
    .then((valor) => {
        console.log(valor);
    })
    .finally(() => {
        console.log("Finalizado");
    });

//Qual será a saída no console?