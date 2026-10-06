//Imutabilidade = não alterar diretamente o dado original.

//Exercício 11 — Último exercício deste bloco
//Agora vamos fazer um exercício de diagnóstico, sem escrever código inicialmente.

const usuario = {
    nome: "Marcelo",

    preferencias: {
        tema: "dark",

        notificacoes: {
            email: true,
            push: true
        }
    }
};

const copia = {
    ...usuario,

    preferencias: {
        ...usuario.preferencias
    }
};

copia.preferencias.notificacoes.email = false;


/* Perguntas:
1. O que acontecerá com:
usuario.preferencias.notificacoes.email
R= Será alterado pela cópia.

2. Por que o spread utilizado em preferencias não foi suficiente?
R= Ainda faltou fazer um spread em um nível do objeto aninhado.

3. Qual objeto ainda está sendo compartilhado entre usuario e copia?
R= notificacoes ainda está sendo compartilhado.

4. Quantos níveis adicionais você precisaria copiar para conseguir alterar email somente na copia? 
R= Somente mais um dentro de preferencias.
*/


