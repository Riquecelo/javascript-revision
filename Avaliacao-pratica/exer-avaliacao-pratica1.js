/*
Primeira questão — interpretação de código
Imagine que uma API devolva esta lista de usuários:
*/

const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Marina", ativo: true }
];

/*
Precisamos criar um novo array contendo somente os usuários ativos, sem modificar o array original.
Qual abordagem você escolheria e por quê?

R= Usaria o filter combinado com sprear para criar o novo array
*/

const usuariosAtivos = usuarios.filter((usuario) => {
    return  usuario.ativo === true
})

console.log(usuariosAtivos)

//Para esse problema, o filter() sozinho já é suficiente. Não precisamos usar spread para criar o novo array.

/*
2. Vamos verificar se você compreendeu
Imagine que, depois de filtrar os usuários ativos, precisamos também transformar cada usuário, adicionando uma propriedade status: "disponível".
Qual combinação você usaria?
- filter() sozinho
- map() sozinho
- filter() seguido de map()

R= Usaria o filter seguido de map, porque depois de filtra agora sim posso fazer as modificações necessarias com o map combinado spread para não afetar o objeto original
*/

const usuariosAtivos2 = usuarios.filter((usuario) => usuario.ativo === true).map((usuario) => {
    return {
        ...usuario,
        status: "disponível"
    }
})

console.log(usuariosAtivos2)