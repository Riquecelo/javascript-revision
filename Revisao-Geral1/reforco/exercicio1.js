/*Exercício 1 — Atualização de perfil
Nível 1 de 4
Imagine que você está desenvolvendo uma tela de perfil de usuário. A API retorna o seguinte objeto:*/

const usuario = {
  nome: "Marcelo",
  idade: 32,
  endereco: {
    cidade: "Bragança",
    estado: "PA",
    pais: "Brasil"
  },
  habilidades: ["HTML", "CSS", "JavaScript"]
};

/*O usuário atualizou seu perfil e agora precisamos:
# Alterar a cidade para "Belém".
# Adicionar "React" à lista de habilidades.
# Manter todas as outras informações originais.
# Criar um novo objeto chamado usuarioAtualizado, sem modificar o objeto usuario original.

Sua missão:
Escreva o código que realiza essas quatro operações.

Regras do desafio:
# Não altere diretamente o objeto original.
# Não copie manualmente todas as propriedades.
# Ao final, mostre os dois objetos no console para verificar se o original permaneceu intacto.*/

const usuarioAtualizado = {
    ...usuario,
    endereco: {
        ...usuario.endereco,
        cidade: "Belém"
    },
    habilidades: [...usuario.habilidades, "React"]
}

console.log(usuario)
console.log(usuarioAtualizado)