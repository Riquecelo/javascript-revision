//Imutabilidade = não alterar diretamente o dado original.

const usuarios = [
    {
        id: 1,
        nome: "Marcelo",
        endereco: {
            cidade: "Bragança",
            estado: "PA"
        }
    },
    {
        id: 2,
        nome: "Ana",
        endereco: {
            cidade: "Belém",
            estado: "PA"
        }
    }
];


const usuariosAtualizados = usuarios.map(usuario => {

    if (usuario.nome === "Marcelo") {
        return {
            ...usuario,
            endereco: {
                ...usuario.endereco,
                cidade: "Belém"
            }
        };
    }

    return usuario;
});



/* Depois responda:
1. Qual condição você colocaria no if?
R= usuario.nome === "Marcelo"

2. O que precisa entrar no primeiro? R= ...usuario,

3. O que precisa entrar no segundo? R= ...usuario.endereco,cidade: "Belém"

4. Por que precisamos fazer ...usuario.endereco? R= Para poder copiar o objeto aninhado.

5. Depois da atualização, explique por que: usuarios[0].endereco.cidade continua "Bragança" enquanto: usuariosAtualizados[0].endereco.cidade é "Belém". 
R= Agora foi feito uma cópia exclusiva no subnível do objeto, parte que se quer alterar mantendo a imutabilidade. 
*/


