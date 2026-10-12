//Imutabilidade = não alterar diretamente o dado original.

/*
Como o reduce() se relaciona com imutabilidade?
Você percebeu algo importante: nesse exemplo, o reduce() não precisa de nenhuma técnica especial de imutabilidade, porque não modifica os dados originais.
Vamos entender a diferença.
*/

//Caso A — reduce() sem mutação

const produtos1 = [
    { nome: "Notebook", preco: 4000 },
    { nome: "Mouse", preco: 200 }
];

const valorTotal = produtos1.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);

/*
Aqui temos:
- produtos permanece intacto.
- produto.preco é apenas consultado.
- acumulador + produto.preco produz um novo valor numérico.
- O número retornado passa a ser o acumulador da próxima iteração.
O acumulador não é um objeto compartilhado que estamos modificando. Ele é um número, e números são valores primitivos.
Por isso, não precisamos de spread (...) nesse caso.
*/


//Caso B — reduce() modificando um objeto externo

const produtos2 = [
    { nome: "Notebook", preco: 4000 },
    { nome: "Mouse", preco: 200 }
];

const resumo1 = {
    total: 0
};

produtos2.reduce((acumulador, produto) => {
    acumulador.total += produto.preco;
    return acumulador;
}, resumo1);

/*
Nesse caso, o resultado final será resumo.total === 4200.
Mas existe uma diferença importante: o objeto resumo foi modificado.
A expressão: acumulador.total += produto.preco;
altera diretamente uma propriedade do objeto recebido como acumulador. Como o valor inicial passado ao reduce() é resumo, o objeto externo acaba sendo modificado.
Isso é um efeito colateral.
*/

//Caso C — reduce() construindo um resultado sem modificar o objeto inicial

const resumo2 = {
    total: 0
};

const resumoAtualizado = produtos.reduce((acumulador, produto) => {
    return {
        ...acumulador,
        total: acumulador.total + produto.preco
    };
}, resumo2);

/*
Agora, a cada iteração, criamos um novo objeto com spread, em vez de alterar o acumulador anterior.
O objeto resumo permanece com total: 0, enquanto resumoAtualizado.total será 4200.
*/