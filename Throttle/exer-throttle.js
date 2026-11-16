/*
Implemente a função seguindo estas regras:
1. Crie uma variável executando inicialmente como false.
2. Retorne uma função que receberá as chamadas.
3. Verifique se executando está como true. Se estiver, interrompa a execução.
4. Se estiver como false, altere para true.
5. Execute o callback.
6. Utilize setTimeout() para liberar a variável depois do tempo recebido pelo parâmetro tempo.

Quero que você faça dois ajustes no seu código:
1. Mova let executando = false para dentro de throttle().
2. Faça throttle() retornar uma arrow function que contenha a lógica de verificação, execução do callback e setTimeout().
*/


function throttle (callback, tempo) {
    
    let executando = false
    let contador = 0
    return () => {

        console.log(++contador)
        if(executando) {
            return
        }
        executando = true

        callback()

        setTimeout(()=>{
            executando = false
        },tempo)
        console.log('\n')
    }
}

const verificar = throttle(() => {
    console.log("Executou:", Date.now())
}, 1000)

verificar()//1
verificar()//2
verificar()//3

setTimeout(verificar, 300)//4
setTimeout(verificar, 600)//5
setTimeout(verificar, 1200)//6
setTimeout(verificar, 1500)//7
setTimeout(verificar, 2200)//8