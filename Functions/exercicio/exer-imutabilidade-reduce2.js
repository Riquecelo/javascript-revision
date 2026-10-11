//Imutabilidade = não alterar diretamente o dado original.

//Exercício - Comparando duas abordagens

const numeros = [10, 20, 30];

// Versão A
const resultadoA = numeros.reduce((acumulador, numero) => {
    acumulador.push(numero * 2);
    return acumulador;
}, []);

// Versão B
const resultadoB = numeros.reduce((acumulador, numero) => {
    return [...acumulador, numero * 2];
}, []);

/*
Responda:
1. As duas versões produzem o mesmo resultado?
2. Qual versão modifica o acumulador existente?
3. Qual versão cria um novo array em cada iteração?
*/
