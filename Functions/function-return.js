// Toda função pode utilizar apalavra reservada 'return'
// Toda função retorna alguma coisa
// Quando não utilizamos a palavra reservada o retorno é 'undefined'

//Função sem o uso da palavra return
console.log('----- Executando função SEM o uso do return ------\n')
function soma(number1, number2){
    console.log(number1 + number2)
};

numero1 = 10;
numero2 = 20;
soma(numero1, numero2);

console.log(`O numero1 é ${numero1}`)
console.log(`O numero2 é ${numero2}`)
console.log(`A soma dos números é: ${soma(numero1, numero2)}`) //Se a função não tiver explícito o a palavra return a resposta sempre será undefined
console.log('------ Fim -------\n')


//Função com uso da palavra return
console.log('----- Executando função COM o uso do return ------\n')
const subtracao = (num1, num2) => {
    // OBS: A variavel total poderia ser criada sem palavra reservada var, let ou const, porém teriamos um problema de escopo
    let total =  num1 - num2
    return total 
}

console.log(`Retornando o resultado da função subtração é: ${subtracao(40,7)}`)
console.log('------ Fim -------\n')