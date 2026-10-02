/* Agora começa a ficar mais parecido com trabalho real.

Exercício 7 — API de usuário. Faça utilizando destructuring.
Extraia diretamente:
nome
idade
profissao
cidade
estado */
//A API retorna:

const respostaAPI = {
    usuario: {
        nome: "Marcelo",
        idade: 32,
        profissao: "Front-End Developer"
    },

    endereco: {
        cidade: "Tucuruí",
        estado: "PA"
    }
};


const {usuario:{nome, idade, profissao}, endereco:{cidade, estado} } = respostaAPI

console.log(nome, idade, profissao,cidade, estado)