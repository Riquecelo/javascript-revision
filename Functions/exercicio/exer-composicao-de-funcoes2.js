//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.

//Exercício 2: Entendendo a composição

//Uma função pode retornar um valor que será utilizado como argumento de outra função

function triplicar(numero) {
    return numero * 3;
}

function somarCinco(numero) {
    return numero + 5;
}

console.log(somarCinco(triplicar(4)));

/*
O que triplicar(4) retorna?

O que somarCinco() recebe?

Qual é o resultado final?
*/

//Guarde esta ideia: composição não é simplesmente chamar várias funções. É conectar suas operações para que o resultado de uma possa alimentar a próxima.