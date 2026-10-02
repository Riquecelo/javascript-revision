/*Exercício 2 — O contexto de this

Agora imagine que você recebeu este código de outro desenvolvedor:*/

const usuario = {
    nome: "Marcelo",

    apresentar() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

const apresentarUsuario = usuario.apresentar;

console.log(usuario.apresentar());
console.log(apresentarUsuario());

/*Sua missão: sem executar o código, responda:

O que será exibido na primeira chamada?
R= Será exibido Marcelo

O que será exibido na segunda chamada? Considere o comportamento do JavaScript em modo estrito, como nos módulos ES.
R= Será exibido undefined

Por que os resultados são diferentes?
R= O motivo é que o this esta relacionado ao modo como o método é invocado. No primeiro caso o método esta relacionado ao objeto usuario na chamada do método, fazendo com que o this referencie ao objeto usuario. No segundo caso há uma perda de referência ao guardar a chamada em uma constant, pois ela preserva apenas o método e quando faz a chamada perde a referência com o objeto usuario. 

///////////////////////////////////////////////////

Explicação da correção:
Correto também! A variável apresentarUsuario recebe a função, mas não mantém uma associação automática com o objeto usuario.

Como a função é chamada isoladamente, em modo estrito, o this é undefined. Ao tentar acessar this.nome, o código retorna um erro? Não: nesse caso, sim, há um erro. A expressão this.nome tenta acessar uma propriedade de undefined, provocando um TypeError.

Portanto, preciso corrigir um detalhe do enunciado anterior: o resultado real da segunda chamada não é undefined; a execução lança um erro e interrompe o fluxo, a menos que ele seja tratado. Você acertou a causa da diferença, mas o resultado esperado no enunciado estava incorreto.

Regra para guardar: uma função armazenada em outra variável não leva consigo o this do objeto de origem. O contexto depende de como a função é chamada, a menos que você o fixe explicitamente com recursos como bind().
*/