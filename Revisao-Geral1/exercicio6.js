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