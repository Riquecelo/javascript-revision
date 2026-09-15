/* Manipulando Arrays
Agora vamos começar a juntar tudo.
Você recebeu:

const produtos = [
    "Notebook",
    "Mouse",
    "Teclado"
]

Faça as seguintes operações:

1. Adicione
Monitor
2. Remova o último produto
3. Adicione
Headset
4. Descubra se existe:
Mouse
5. Descubra a posição do:
Teclado
6. Inverta a ordem dos produtos
7. Crie uma cópia do array

Aqui começa uma coisa muito importante para Front-End:
Não confunda modificar um array com criar um novo array. */


const produtos = [
    "Notebook",
    "Mouse",
    "Teclado"
]

produtos.push("Monitor")
produtos.pop()
produtos.push("Headset")

console.log('O array contém o item Mouse? =>',produtos.includes('Mouse'))
console.log('Índice do Teclado antes do reverse', produtos.indexOf('Teclado'))
produtos.reverse()
const novoArray = produtos.slice()
console.log('Índice do Teclado depois do reverse',produtos.indexOf('Teclado'))

console.log(produtos)
console.log(novoArray)