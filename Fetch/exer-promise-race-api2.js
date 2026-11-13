const requisicao = fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
);

const limiteDeTempo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Tempo limite excedido"));
    }, 1);
});

Promise.race([requisicao, limiteDeTempo])
    .then((resposta) => {
        console.log("THEN executado:", resposta);
    })
    .catch((erro) => {
        console.log("CATCH executado:", erro.message);
    });