function buscarDados (url) {
    return fetch(url)
        .then((resp) => {
            if(resp.ok === false) {
                throw new Error("Status da situação: " + resp.status)
            }

            return resp.json()
        })
        .catch((erro) => {
            console.log("Erro ao consultar a API")
            throw erro
        })
}

const PUBLICACAO = "https://jsonplaceholder.typicode.com/posts/2"

const USUARIO = "https://jsonplaceholder.typicode.com/users/1"

const USUARIO_INVALIDO = "https://jsonplaceholder.typicode.com/users/9999"



async function carregarDados() {
    try{ 
        const RESULTADO = await Promise.allSettled([
            buscarDados(PUBLICACAO),
            buscarDados(USUARIO),
            buscarDados(USUARIO_INVALIDO)
        ])

        RESULTADO.forEach((res) => {
            if(res.status === "fulfilled") {
                
                if(res.value.title !== undefined) {
                    console.log(res.value.title)
                }else if(res.value.name !== undefined ){
                    console.log(res.value.name)
                }

            } else if(res.status === "rejected") {
                console.log(res.reason.message)
            }
        })

        const MENSAGENS = RESULTADO.map((res) => {
            if (res.status === "fulfilled") {
                if ("title" in res.value) {
                    return "Publicação carregada!";
                }

                if ("name" in res.value) {
                    return "Usuário carregado!";
                }

                return "Dados recebidos, mas sem identificação.";
            }

            return "Falha: " + res.reason.message;
        });
        
        console.log(MENSAGENS)
    } catch (erro) {
        console.log("=>", erro)
    }
}

carregarDados()