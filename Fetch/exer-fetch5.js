const  URL =  "https://jsonplaceholder.typicode.com/posts/1"

async function usarApi() {

   try{
    const resposta = await fetch(URL)
 
    if(resposta.ok === false){
        throw new Error(` API com resposta ${resposta.status}`)
    }

    const dados = await resposta.json()
    //console.log(resposta)
    //console.log(dados)
    console.log(dados.title)
   }
   catch(error){
    console.log(error + "\nNão foi possível carregar a publicação.")
   }

   console.log("Consulta finalizada")
}

usarApi()
