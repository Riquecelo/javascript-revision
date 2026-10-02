/* Exercício 9 — Array + destructuring
Extraia:

HTML
JavaScript
React

utilizando destructuring.
Não utilize índices individualmente. */

const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript"
];

const [html,,javaScript, react] = tecnologias

console.log(html, javaScript, react)