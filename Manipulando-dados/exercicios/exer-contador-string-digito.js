//Contando caracteres e dígitos
//Você recebeu:

const cpf = "12345678901"

/* Descubra:
quantos caracteres existem;
quantos dígitos existem;
se o CPF possui exatamente 11 caracteres.

Depois faça: 
if (...) {
    console.log("CPF válido")
} else {
    console.log("CPF inválido")
}

Bônus
Faça o mesmo para:
*/
const telefone = "91987654321"

let isFone = telefone.length
let isCpf = cpf.length

if(isCpf == 11 ){
    console.log("CPF válido")
}else{
    console.log("CPF inválido")
}

if(isFone == 11){
    console.log("Telefone válido")
}else{
    console.log("Telefone inválido")
}
//console.log(isCpf)