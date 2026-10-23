/* Exercício 6 — Verificação de tecnologia

Você recebeu:
const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript"
];

Verifique se: React está presente.
Depois verifique se: Vue está presente. */

const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript"
];

const comTemReact = tecnologias.includes("React")
const comTemVue = tecnologias.includes("Vue")


console.log(comTemReact)
console.log(comTemVue)


//Testando com array de objetos

const produtos = [
    { nome: "Mouse", preco: 150 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Teclado", preco: 300 },
    { nome: "Monitor", preco: 1200 }
];

const temMouse = produtos.includes( produtos.nome === "Mouse")

console.log('Tem Mouse: ', temMouse)

const temMouse2 = produtos.some((produto) => produto.nome === "Mouse")

console.log('Tem Mouse2: ', temMouse2)