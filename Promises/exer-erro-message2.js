function consultarEstoque() {
    throw new Error("Falha ao consultar estoque!");
}

try {
    consultarEstoque();
    console.log("Estoque consultado com sucesso");
} catch (erro) {
    console.log(erro);
    console.log(erro.message);
}

console.log("Consulta encerrada");

/*
Responda com seu raciocínio:
1. O que será exibido no primeiro console.log(erro)?
2. O que será exibido em console.log(erro.message)?
3. "Estoque consultado com sucesso" será exibido? Por quê?
4. "Consulta encerrada" será exibido? Por quê?
*/