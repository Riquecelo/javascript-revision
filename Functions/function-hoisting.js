//Hoisting de função é o corpotamento onde as funções são elevadas para cima do escopo global

//Funções nomeadas podem ser elevadas(sofre hoisting)
testeHoisting()

function testeHoisting(){
    console.log('Teste Hoisting com função nomeada')
}

//Funções anonimas não são compatíveis com o hoisting
//o que é elevado é a declaração de variável, que acavaba virando uma declação de variável não definida
//Variável não definida e undefined, e undefined não é função o que gera erro.
anonimaHoisting()// trava a execução do código/gera erro

//A elevação acorre só da declaração de variável e não da função.
let anonimaHoisting = function(){
    console.log('Teste Hoisting com função anônima')
}