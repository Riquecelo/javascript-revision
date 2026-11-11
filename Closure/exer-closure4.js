/*
2. Closure para proteger dados privados
Imagine que você está desenvolvendo um formulário de cadastro.

Você possui uma variável que controla quantas vezes o usuário tentou enviar o formulário.

Não queremos permitir que qualquer parte do código altere diretamente essa variável.

Podemos utilizar Closure para proteger esse estado.
*/

function criarControleFormulario() {

    let tentativas = 0

    return {

        registrarTentativa() {
            tentativas++
            console.log(`Tentativas: ${tentativas}`)
        },

        consultarTentativas() {
            return tentativas
        }

    }

}

const formulario = criarControleFormulario()

formulario.registrarTentativa()
formulario.registrarTentativa()

console.log(formulario.consultarTentativas())

/*
Observe:
formulario.tentativas = 100


Isso não altera a variável tentativas que está protegida dentro de criarControleFormulario().

Por que isso é importante?

Closure permite criar um estado privado, acessível somente pelas funções que possuem acesso ao ambiente léxico.

Aplicações:
- Controle de formulários.
- Gerenciamento de estados internos.
- Controle de autenticação em determinadas abstrações.
- Encapsulamento de informações.
- Gerenciamento de componentes.
*/