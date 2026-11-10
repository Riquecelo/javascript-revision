/*
Requisitos:
1. Criar uma variável quantidade iniciando em zero.
2. Retornar uma função interna.
3. Cada execução da função deve incrementar quantidade.
4. Exibir a quantidade atual no console.
*/

function criarCarrinho() {

    let quantidade = 0

    return function () {
        quantidade ++
        console.log(quantidade)
    }

}

const criar = criarCarrinho()//A função externa é executada uma única vez.
//Nesse momento, o JavaScript cria o ambiente léxico daquela execução

criar()
criar()
criar()
//O JavaScript não executa novamente criarContador().
//Ele executa somente a função interna que foi retornada.

console.log("Esperando...")
setTimeout(()=>{
    criar()
},5000)

/*
Uma Closure acontece quando uma função mantém acesso às variáveis do ambiente léxico onde foi criada, mesmo sendo executada fora daquele ambiente.

Atenção: Closure não significa simplesmente criar uma função dentro de outra. O ponto importante é a função preservar acesso ao ambiente léxico externo.

O ambiente léxico é como um espaço onde o JavaScript mantém as variáveis e informações disponíveis para determinado contexto de execução.

O que é escopo léxico?
É a regra que determina que uma função consegue acessar variáveis do local onde foi definida, respeitando a cadeia de escopos.

Em outras palavras:
- A função interna acessa suas próprias variáveis.
- Também pode acessar variáveis da função externa.
- Mas a função externa não consegue acessar diretamente as variáveis internas.
*/