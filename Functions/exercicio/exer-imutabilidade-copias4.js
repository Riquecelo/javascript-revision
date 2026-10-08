//Imutabilidade = não alterar diretamente o dado original.

//🚀 Exercício 4 — Agora vamos aumentar um nível

const usuario = {
    nome: "Marcelo",

    endereco: {
        cidade: "Bragança",

        contato: {
            telefone: "99999-9999"
        }
    }
};

//Queremos alterar somente o telefone da cópia: copiaUsuario.endereco.contato.telefone = "98888-8888";

const copiaUsuario = {
    ...usuario,
    endereco:{
        ...usuario.endereco,
        contato:{
            ...usuario.endereco.contato
        }
    }
}

copiaUsuario.endereco.contato.telefone = "98888-8888"

console.log(usuario.endereco.contato.telefone)
console.log(copiaUsuario.endereco.contato.telefone)