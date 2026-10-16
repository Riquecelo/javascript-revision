//Composição é combinar funções para que o resultado de uma seja utilizado como entrada de outra.
//Uma função pode retornar um valor que será utilizado como argumento de outra função

//Exercício 1 — Três funções em sequência

function dobrar(numero) {
    return numero * 2;
}

function somarDez(numero) {
    return numero + 10;
}

function dividirPorDois(numero) {
    return numero / 2;
}

function calcular(numero) {
    return dividirPorDois(somarDez(dobrar(numero)));
}

console.log(calcular(5));

/*
Sem executar o código, descubra o resultado acompanhando cada etapa.
1. Quanto retorna dobrar(5)?
2. Qual valor somarDez() recebe e quanto ela retorna?
3. Qual valor dividirPorDois() recebe e quanto ela retorna?
4. Qual será o resultado final de calcular(5)?
*/