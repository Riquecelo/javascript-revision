//A palavra-chave async é usada para declarar uma função assíncrona.
async function buscarUsuario() {
    return "Marcelo";
}

console.log(buscarUsuario());

//Uma função declarada com async sempre retorna uma Promise.
//Lembra-se de como utilizamos .then() para acessar o resultado de uma Promise. Podemos fazer isso com nossa função async.

buscarUsuario().then((nome) => {
    console.log(nome);
});

/*
1. buscarUsuario() retorna uma Promise.
2. A Promise é cumprida com o valor "Marcelo".
3. O .then() recebe esse valor no parâmetro nome.
4. O console.log(nome) exibe "Marcelo".
*/

//OBS:E tem mais um detalhe importante: se você escrever uma função async sem um return explícito, ela será cumprida com undefined.