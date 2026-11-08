const fonteRapida = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Fonte rápida")
    },1000)
})

const fonteLenta = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Fonte lenta")
    },3000)
})

//Entrega o resultado da primeira Promise a terminar, com sucesso ou erro.
Promise.race([fonteLenta, fonteRapida])
    .then((resposta) => console.log(resposta))