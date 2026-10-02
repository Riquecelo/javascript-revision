const usuario5 = {
    nome: "Marcelo H S",

    apresentar() {
        console.log(this.nome);

        const mostrar = () => {
            console.log(this.nome);
        };

        mostrar();
    }
};

const outraFuncao = usuario5.apresentar;

usuario5.apresentar();
outraFuncao();//exibe undefined pela perda do contexto do this