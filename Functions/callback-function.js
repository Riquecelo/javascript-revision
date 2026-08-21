//Callback function

function executora(ativado){
    ativado()
}

executora(() => {
    console.log('Executando uma callback function')
})

function teste(){
    console.log('Executando função de teste')
}

executora(teste)

let soma = () => {
    console.log(1 + 2)
}

executora(soma)

// Callback function exemplo diferente
// Função nomeada que funcionará como callback
function calculaSoma(a,b){
    let total = a + b
    return console.log(total)
}

// Função principal que recebe outra função por parâmetro
function exibeResultado(a, b, resultado ){
    resultado(a,b)
}

// Chamando a função e passando apenas o NOME da função (sem os parênteses)
exibeResultado(7,9, calculaSoma)