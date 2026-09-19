//Desafio 1 — Organizar números em ordem crescente.
const numeros = [45, 10, 30, 5, 20];
numeros.sort((a,b) => a - b)
console.log(numeros)


//Desafio 2 — Verificar tecnologia. Verifique se "React" está presente no array. 
const tecnologias = ["JavaScript", "React", "CSS", "HTML"];
const temReact = tecnologias.includes("React")
console.log("Tem React?",temReact)

//Desafio 3 — Manipular tarefas
/* Faça, nessa ordem:
Adicione "Estudar React" no final.
Adicione "Tomar café" no início.
Remova o primeiro elemento.
Remova o último elemento. */
const tarefas = ["Estudar JS", "Fazer exercício"];
tarefas.push("Estudar React")
tarefas.unshift("Tomar café")
tarefas.shift()
tarefas.pop()
console.log(tarefas)
//resultado é: ["Estudar JS", "Fazer exercício"]

//Desafio 4 — Inverter. Inverta a ordem dos nomes.
const nomes = ["Ana", "Bruno", "Carlos", "Daniel"];
nomes.reverse()
console.log(nomes)

//Desafio 5 — Objetos
/* Faça duas coisas:
A) Ordene os produtos pelo preço, do menor para o maior.
B) Verifique se existe um produto chamado "Monitor". */
const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Teclado", preco: 300 }
];

produtos.sort((a,b) => a.preco - b.preco)

const temMonitor = produtos.map((produto) => produto.nome).includes("Monitor")

const possuiMonitor = produtos.some((produto) => produto.nome === "Monitor")

console.log(produtos)
console.log('Tem Monitor?',temMonitor)
console.log('Possui Monitor?',possuiMonitor)
