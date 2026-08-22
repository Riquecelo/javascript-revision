// Function scope
// Escopo define o limite a extensão o alcance dos blocos de código.

//Lembrando que uma variável declarada sem atribuição, por padrão é undefined
let pensamento

//Como a função não tem parâmetro declarado, neste caso a atribuição é feita na variável 'pensamento' fora da função.
function criarPensamento() {
    //Lembrando sem o uso da palavra return, afunção devolve undefined
    return pensamento = "Estudando!"
}

console.log(pensamento)//retorna undefined
console.log(criarPensamento())//retorna o novo valor
console.log(pensamento)//retorna o valor atualizado

console.log('\n')

// Uma outra abordagem para evitar a atribuição na variável errada(no caso a de escopo global)
let frase

//Como o parâmetro foi declarado,será criado uma variável no escopo da função.
//Com isso a função não irá procurar a variável fora do escopo da função.
function criandoFrases(frase){
    return frase = "O poder do Hábito"
}

console.log(frase)//Variável declarada de escopo global não definida
console.log(criandoFrases())//Função invocada não altera a variável de escopo global
console.log(frase)//Variável continua não definida

console.log('\n')

//Outra maneira de evitar a atribuição na variável errada(no caso a de escopo global)
let numero = 5

//Podemos declarar uma variável na função que será manipulda.
function alteraNumero(){
    let numeroNovo = 10 + numero
    return numeroNovo
}

console.log(numero)
console.log(alteraNumero())
console.log(numero)