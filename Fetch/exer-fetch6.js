const texto = "<html>Resposta que não é JSON</html>";

try {
    const dados = JSON.parse(texto);//Texto não é convertido porque não é uma estrutura JSON válida.
    console.log(dados);
} catch (erro) {
    console.log("Falha ao interpretar JSON");
}

console.log("Programa finalizado");