/* Exercício 18 — Arrow function

Analise: */

const usuario = {
    nome: "Marcelo",

    apresentar() {
        const mostrar = () => {
            console.log(this.nome);
        };

        mostrar();
    }
};

usuario.apresentar();

/* Explique:

Por que o this da arrow consegue acessar o nome do objeto?
R= Como a arrow herda o this do contexto acima e ela está dentro de uma função anônima, que víncula o objeto ao método na hora da chamada, ela consegue exibir o nome corretamente. 
*/