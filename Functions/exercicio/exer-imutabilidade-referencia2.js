//Imutabilidade = não alterar diretamente o dado original.
//Referência é o vínculo que uma variável tem com um objeto na memória, permitindo acessá-lo.
/*Resumindo:
- Valor: o dado em si, como 10 ou "Marcelo".
- Referência: o vínculo que permite acessar um objeto.
- Mesma referência: duas variáveis acessam o mesmo objeto.
- Referências diferentes: as variáveis acessam objetos distintos.*/

const produto = {
    nome: "Notebook",
    detalhes: {
        marca: "Dell",
        preco: 3500
    }
};

const copia = {
    ...produto,
    detalhes: {
        ...produto.detalhes
    }
};

copia.nome = "Computador";
copia.detalhes.preco = 4000;

console.log(produto.nome);
console.log(copia.nome);

console.log(produto.detalhes.preco);
console.log(copia.detalhes.preco);

/*
Responda sem executar o código:
1. O que será exibido por console.log(produto.nome)?
R= Será exibido Notebook.
2. O que será exibido por console.log(copia.nome)?
R= Será exibido Computador.
3. O que será exibido por console.log(produto.detalhes.preco)?
R= Será exibido 3500.
4. O que será exibido por console.log(copia.detalhes.preco)?
R= Será exibido 4000.
5. Qual é a diferença entre a cópia feita neste exercício e a cópia do exercício anterior?
R= Aqui a cópia foi feita nos dois níveis, então agora são dois objetos diferentes.
*/

