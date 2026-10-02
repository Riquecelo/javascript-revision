/* Exercício 4 — Ordenação
A API retornou:
precos = [149.90, 3499.90, 399.90, 1299.90, 299.90];

Organize os preços:
A)Do menor para o maior.
B)Do maior para o menor. */

const precos = [149.90, 3499.90, 399.90, 1299.90, 299.90];

precos.sort((a,b) => a - b)

precos.sort((a,b) => b - a)

console.log(precos)
