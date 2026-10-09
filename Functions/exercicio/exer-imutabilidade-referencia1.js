//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*
Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.
*/

const usuario = {
    nome: "Marcelo",
    endereco: {
        cidade: "Bragança"
    }
};

const copia = {
    ...usuario
};

copia.nome = "Carlos";
copia.endereco.cidade = "Belém";

console.log(usuario.nome);
console.log(copia.nome);

console.log(usuario.endereco.cidade);
console.log(copia.endereco.cidade);


/*
Sua missão
Sem executar o código, responda:
1. O que será exibido por console.log(usuario.nome)?
R= Será exibido Marcelo.
2. O que será exibido por console.log(copia.nome)?
R= Será exibido Carlos.
3. O que será exibido por console.log(usuario.endereco.cidade)?
R= Será exibido Belém.
4. O que será exibido por console.log(copia.endereco.cidade)?
R= Será exibido Belém também.
5. Por que alterar copia.nome não altera usuario.nome, mas alterar copia.endereco.cidade também afeta usuario.endereco.cidade?
R= Porque no primeiro nível do objeto foi feito a copia com o spread, mas o objeto aninhado continua compartilhando a mesma referência do objeto aninhado original.
*/