const promessa = new Promise((resolve, reject) => {
    resolve("Produtos carregados!");
});

console.log(promessa);

/*
- Criamos uma Promise.
- Chamamos resolve() para indicar que a operação teve sucesso.
- A Promise passa para o estado fulfilled.
- O valor "Produtos carregados!" é o resultado da Promise, mas o console.log não imprime diretamente esse texto: ele exibe o objeto Promise.
Esse é um ponto fundamental: ter uma Promise cumprida não significa que o JavaScript transforma automaticamente o objeto Promise no valor que ele contém.
*/