/*1. O que são efeitos colaterais?
Um efeito colateral acontece quando uma função faz alguma coisa além de calcular e retornar um resultado, afetando algo fora do seu próprio contexto.
Por exemplo, uma função pode:
- Modificar um objeto recebido como argumento.
- Alterar uma variável externa.
- Exibir uma mensagem no console.
- Modificar o conteúdo de uma página HTML.
- Fazer uma requisição a uma API.

Um detalhe importante: nem todo efeito colateral é necessariamente um erro. Em aplicações frontend, por exemplo, precisamos interagir com o DOM, fazer requisições e atualizar interfaces. O importante é saber identificar e controlar esses efeitos.
*/

//Exercício 1 — Identifique os efeitos colaterais
const produto = {
    nome: "Notebook",
    preco: 3000
};

function aplicarDescontoA(produto) {
    produto.preco -= 500;
    return produto;
}

function aplicarDescontoB(produto) {
    return {
        ...produto,
        preco: produto.preco - 500
    };
}

function aplicarDescontoC(produto) {
    console.log("Calculando desconto...");
    return produto.preco - 500;
}

/*
Parte 1 — Analise o comportamento
1. Qual das três funções modifica diretamente o objeto original recebido como argumento?
R= aplicarDescontoA, Já a função aplicarDescontoC() não modifica o objeto. Ela apenas lê o preço, calcula um valor e exibe uma mensagem no console. Já aplicarDescontoB se for armazenada em uma variável acredito que criará uma cópia.

OBS: E atenção a um detalhe do seu raciocínio: não é necessário armazenar o retorno em uma variável para que o novo objeto seja criado. O novo objeto é criado quando a função é executada; a variável apenas permite guardar uma referência a ele.

2. Qual função retorna um novo objeto sem modificar as propriedades do objeto original?
R= aplicarDescontoB por trabalhar com spread.

3. A função aplicarDescontoC() possui um efeito colateral? Explique o motivo.
R= Porque ela retorna uma modificação diretamente na propriedade do objeto. que recebeu.

OBS: Essa função não altera produto.preco. Ela faz duas coisas:
- Exibe uma mensagem no console.
- Retorna o resultado do cálculo.
O console.log() é um efeito colateral, pois produz uma saída observável fora do valor retornado pela função.
Portanto, uma função pode ter efeito colateral sem modificar nenhum objeto ou variável.
*/
const resultadoA = aplicarDescontoA(produto);
console.log(produto.preco);

//OBS: Aqui existe um detalhe importante: a função A modifica o objeto compartilhado. Por isso, a função B recebe o preço que já foi alterado.
const resultadoB = aplicarDescontoB(produto);
console.log(produto.preco);

console.log(resultadoA === produto);
console.log(resultadoB === produto);

/*
4. Se executarmos o código abaixo, qual será o preço exibido em cada console?
R= primeiro console 2500, segundo console 2000, terceiro console true, quarto console false
*/

/*
5. Imagine que você está desenvolvendo um carrinho de compras em uma aplicação frontend. Por que pode ser perigoso modificar diretamente os objetos dos produtos durante um cálculo de desconto?
R= Se outras partes do projeto precisarem observar o objeto original, uma alteração direta pode prejudicar as outras partes do sistema.

Sua vez: teste de compreensão
Antes de avançarmos, responda estas duas perguntas com suas próprias palavras.
A. Uma função modifica um objeto recebido como argumento. Mesmo que ela retorne esse mesmo objeto, o efeito colateral deixa de existir?
R= Não, porque no final o objeto original foi alterado. 

B. Uma função não modifica nenhum objeto, mas executa console.log("Olá"). Ela possui um efeito colateral? Por quê?
R= Sim, possui efeito colateral de exibição no console.

*/