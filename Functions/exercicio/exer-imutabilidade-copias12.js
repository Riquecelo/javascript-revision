//Imutabilidade = não alterar diretamente o dado original.

const produtos = [
    {
        nome: "Notebook",
        preco: 3500,
        especificacoes: {
            memoria: "16GB",
            armazenamento: "512GB"
        }
    },
    {
        nome: "Mouse",
        preco: 150,
        especificacoes: {
            memoria: "Não possui",
            armazenamento: "Não possui"
        }
    }
];

const produtosAtualizados = produtos.map(produto => ({
    ...produto
}));

produtosAtualizados[0].especificacoes.memoria = "32GB";


/* 🧠 Analise sem executar o código
Responda:
1. O que acontecerá com: produtos[0].especificacoes.memoria
Será "16GB" ou "32GB"?
R= Será 32GB

2. Por que o map() não foi suficiente para criar uma cópia completamente independente?
R= Porque o map passa superficialmente pelos itens do array.

3. O que foi copiado pelo:
{
    ...produto
}
e o que continuou sendo compartilhado?
R= Foi copiado o primeiro nível do objeto, especificacoes continua sendo compartilhado.

4. Como você modificaria o map() para criar uma cópia independente também de especificacoes?
Complete:
const produtosAtualizados = produtos.map(produto => ({
    ...produto,
    especificacoes: {
    ...produto.especificacoes
    }
}));

5. 🧠 Regra prática
Complete com suas palavras:
Quando tenho um array de objetos e quero fazer uma atualização imutável, normalmente uso map() para percorrer os itens do objeto, e uso spread dentro do objeto para copiar o conteúdo dos itens.
 */