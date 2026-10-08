/*
🧠 Função pura = 2 regras
1. Não causa efeitos colaterais
Não altera variáveis ou objetos externos.
2. Mesma entrada → mesmo resultado
A função é previsível.

Ela não precisa ficar procurando informações escondidas fora dela.
Isso facilita reutilização, testes e manutenção, algo especialmente útil em aplicações Front-End.
*/

const produto = {
    nome: "Notebook",
    preco: 3000,
    desconto: 10
};

function calcularPrecoFinal(produto) {
    return produto.preco - (produto.preco * produto.desconto / 100);
}

console.log(calcularPrecoFinal(produto));
