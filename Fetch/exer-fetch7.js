const URL = "https://jsonplaceholder.typicode.com/posts/9999";

async function usarApi() {
    try {
        const resposta = await fetch(URL);

        if(resposta.ok === false){
            throw new Error("Status da Situação: " + resposta.status)
        }

        const dados = await resposta.json();

        console.log(dados.title);
    } catch (erro) {
        console.error(erro)
        console.log("Não foi possível carregar a publicação.");
    }
}

usarApi();