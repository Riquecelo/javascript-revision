const carregarUsuario = new Promise((resolve, reject) => {
    reject("Usuário não encontrado");
});

carregarUsuario
    .then((usuario) => {
        console.log("Usuário:", usuario);
        return usuario.nome;
    })
    .catch((erro) => {
        console.log("Falha:", erro);
    });


/*
1. O que será exibido no console?
R= A Promise executa reject("Usuário não encontrado"). Como houve uma rejeição, o JavaScript não executa o callback de sucesso do .then(). O fluxo segue para o .catch(), que exibe a mensagem de falha.
Portanto, console.log("Usuário:", usuario) não é executado.

2. Por que o callback do .then() não é executado?
R= Porque a Promise foi rejeitada com reject().
Lembre-se desta distinção:
- .then() recebe o resultado de sucesso no callback que estamos usando.
- .catch() recebe o motivo da rejeição.
O .then() não deixa de executar por falta de return. O problema é que a operação foi rejeitada antes de chegar ao callback de sucesso.

3. Qual é o valor recebido pelo parâmetro erro?
R= Ele recebe a string:"Usuário não encontrado"
Isso acontece porque o valor passado para reject() é o motivo da rejeição recebido pelo .catch().
*/