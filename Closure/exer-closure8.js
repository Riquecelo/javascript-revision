/*
6. Closure dentro do React
Essa é uma aplicação especialmente importante para sua futura etapa de React.

Closures aparecem constantemente em funções de componentes, callbacks e Hooks.
*/

import { useState } from "react"

function Contador() {

    const [quantidade, setQuantidade] = useState(0)

    function incrementar() {

        setQuantidade(quantidade + 1)

    }

    return (
        <button onClick={incrementar}>
            Quantidade: {quantidade}
        </button>
    )

}