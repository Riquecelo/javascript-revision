//Imutabilidade = não alterar diretamente o dado original.

//Exercício — Array aninhado


const usuario = {
    id: 1,
    nome: "Marcelo",
    pedidos: [
        {
            id: 101,
            produto: "Notebook",
            quantidade: 1
        },
        {
            id: 102,
            produto: "Mouse",
            quantidade: 2
        }
    ]
};

//Precisamos alterar a quantidade do Mouse de 2 para 3, sem modificar usuario.

const usuarioAtualizado = {
    ...usuario,
    pedidos: usuario.pedidos.map((pedido) => {
        if(pedido.produto === "Mouse"){
            return {
                ...pedido,
                quantidade: 3
            }
        }
        return pedido;
    })
}

console.log(usuarioAtualizado)

/* 
Responda:
1. Qual condição colocaria no if?
R= pedido.produto === "Mouse"

2. O que colocaria no objeto retornado?
R=  return {
                ...pedido,
                quantidade: 3
            }

3. Por que precisamos usar map() em pedidos?
R= Precisamos usar o map para percorrer pedidos.

4. Por que precisamos de ...usuario?
R= Precisamos para copiar o primeiro nível do objeto.

5. Por que o pedido do Notebook pode continuar sendo retornado diretamente?
R= Porque não precisamos modificar as informações do objeto notebook.

6. Explique, com suas palavras, quais referências novas foram criadas nessa atualização.
R= Foi criado para o mouse.
*/