/*
Guarde estas três situações:
- 200: o servidor respondeu com sucesso.
- 404: o servidor respondeu, mas o recurso não foi encontrado. O fetch não lança uma exceção automaticamente por esse status.
- Falha de rede: o fetch pode rejeitar sua Promise; ao usar await, essa rejeição é lançada como uma exceção.
*/
const resposta = await fetch(url);
console.log(resposta.status);
console.log("Continua");

