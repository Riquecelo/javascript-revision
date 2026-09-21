const tecnologias = [
    "JavaScript",
    "React",
    "TypeScript",
    "CSS",
    "HTML"
];

const temReact = tecnologias.includes('React')

console.log('Tem React', temReact)

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Teclado", preco: 300 }
];

const temMouse = produtos.map((produto) => produto.nome).includes("Mouse")
const temTeclado = produtos.some((produto) => produto.nome === "Teclado" )

console.log('Tem mouse? ',temMouse)
console.log('Tem teclado? ',temTeclado)