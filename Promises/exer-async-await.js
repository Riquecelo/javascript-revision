/*
Os fundamentos de async e await:
- async faz a função retornar uma Promise.
- return define o valor com que a Promise será cumprida, quando a execução termina normalmente.
- await permite obter o valor cumprido e continuar o fluxo da função.
- .then() continua válido e também retorna uma Promise.
- await não é obrigatório em toda função async.
*/

/*
Quando estiver implementando uma funcionalidade, pergunte:

“Essa função precisa esperar o resultado de alguma operação assíncrona para continuar seu trabalho?”

Operações comuns que podem ser assíncronas:
- Buscar produtos em uma API.
- Consultar os dados de um usuário no servidor.
- Enviar um formulário para o backend.
- Ler um arquivo de forma assíncrona.
- Aguardar uma operação no banco de dados, no lado do servidor.
Se a função precisa utilizar o resultado de uma dessas operações com await, normalmente ela deverá ser declarada com async.

Por outro lado, cálculos comuns, transformações de arrays e validações que utilizam dados já disponíveis geralmente não precisam ser assíncronos.
*/