/*
Considere dois cenários independentes:
- Cenário A: o servidor responde com status 404.
- Cenário B: ocorre uma falha de rede, e a Promise do fetch é rejeitada.
Responda com suas próprias palavras:
1. No cenário A, quais informações serão exibidas no console?
2. No cenário B, a mensagem "Consulta finalizada" será exibida? Por quê?
3. Qual é a principal diferença entre esses dois cenários?
*/

async function carregarProdutos() {
    const resposta = await fetch("/api/produtos");

    console.log(resposta.status);
    console.log("Consulta finalizada");
}

/*
Pontos essenciais:
- fetch() retorna uma Promise.
- await fetch() fornece um objeto Response quando a Promise é cumprida.
- Uma resposta 404 não provoca, por si só, uma exceção automática.
*/