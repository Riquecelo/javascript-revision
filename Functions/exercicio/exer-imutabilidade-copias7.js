//Imutabilidade = não alterar diretamente o dado original.

//Exercício 7 — Agora vamos dificultar um pouco

const usuarios = [
    {
        nome: "Marcelo",
        ativo: true,
        endereco: {
            cidade: "Bragança",
            estado: "PA"
        }
    },
    {
        nome: "João",
        ativo: true,
        endereco: {
            cidade: "Belém",
            estado: "PA"
        }
    }
];

/* Precisamos criar usuariosAtualizados onde somente o Marcelo terá:

ativo: false
cidade: "Belém"

João deve permanecer exatamente como está.

Regras:
Use map()
Use spread
Não altere usuarios
Lembre-se que endereco é um objeto aninhado */

const usuariosAtualizados = usuarios.map((usuario) => {
    if(usuario.nome === "Marcelo"){
        return {
            ...usuario,
            ativo: false,
            endereco:{
                ...usuario.endereco,
                cidade: "Belém"
            }
        }
    }

    return usuario
})

console.log(usuarios)
console.log(usuariosAtualizados)