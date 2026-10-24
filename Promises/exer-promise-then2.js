
const promessa = new Promise((resolve) => {
    resolve(20);
});

promessa.then((numero) => {
    return numero + 10;
}).then((resultado) => {
    console.log(resultado);
});

/*
Responda sem executar o código:
1. Qual valor numero recebe?
2. O que o primeiro .then() retorna?
3. Qual valor resultado recebe no segundo .then()?
4. Qual número será exibido no console?
*/