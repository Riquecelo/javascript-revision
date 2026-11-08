const URL = "https://jsonplaceholder.typicode.com/posts/1";

// 1. Faça a requisição Fetch
const requi = fetch(URL)

// 2. Crie a Promise do limite de tempo
const limiteDeTempo = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject("Tempo limite excedido")//Isso funciona, mas rejeitar com uma string significa que erro.message será undefined caso o temporizador vença, pois a string não possui essa propriedade.
        reject(new Error("Tempo limite excedido"))//Assim, seu .catch() consegue acessar erro.message de maneira consistente, tanto para o erro de tempo quanto para erros criados com throw new Error().
    }, 1)
})

// 3. Use Promise.race()
// 4. Verifique a resposta HTTP e converta o JSON
// 5. Exiba o título e trate possíveis erros
/* Promise.race([requi, limiteDeTempo])
    .then((resposta) => {
        if(!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        return resposta.json()
    })
    .then((dados) => console.log(dados.title))
    .catch((erro) => {
         console.log("Não foi possível carregar os dados:", erro.message);
    }) */

Promise.race([requi, limiteDeTempo])
    .then((resposta) => {

        if (!(resposta instanceof Response)) {
            throw new Error("O resultado não é uma resposta HTTP");
        }

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        return resposta.json();
    })
    .then((dados) => console.log(dados.title))
    .catch((erro) => {
        console.log("Erro:", erro.message);
    });




