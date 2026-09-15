/* Encontrando palavras em frases
Temos:
const mensagem = "Olá, seja bem-vindo à nossa loja!"

Descubra se a mensagem contém: "loja"
Depois descubra se contém: "produto"

Seu programa deve produzir algo parecido com:
A mensagem contém "loja"
A mensagem não contém "produto"
Bônus

Faça a busca funcionar independentemente de maiúsculas:
const mensagem = "Bem-vindo à NOSSA Loja!"

Pesquisar: "loja"
deve encontrar a palavra. */

const mensagem = "Olá, seja bem-vindo à nossa loja!"

const palavra = "produto"
console.log(mensagem.includes(palavra))

if(mensagem.includes(palavra)){
    console.log(`A mensagem contém "${palavra}"`)
}else{
    console.log(`A mensagem não contém "${palavra}"`)
}

const mensagem2 = "Bem-vindo à NOSSA Loja!"

const mensagemConvertida = mensagem2.toLowerCase()

//console.log(mensagemConvertida)

const palavra2 = "nossa"

if(mensagemConvertida.includes(palavra2)){
    console.log(`A mensagem contém "${palavra2}"`)
}else{
    console.log(`A mensagem não contém "${palavra2}"`)
}