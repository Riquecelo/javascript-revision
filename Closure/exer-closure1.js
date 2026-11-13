/*
Diferença entre ambiente léxico e Closure
Quero que você guarde esta distinção:
Conceito	Significado
Ambiente léxico	Espaço que mantém variáveis e referências ao ambiente externo.
Closure	Capacidade de uma função manter acesso ao ambiente léxico onde foi criada.

Uma analogia:
- Ambiente léxico: a gaveta onde estão guardadas as informações.
- Closure: a função que continua tendo acesso àquela gaveta.
*/

const criarContador =  () => {
    let contador = 0
    
    return function(){
        contador ++

        console.log(contador)
    }
}

const contar = criarContador()

contar()
contar()