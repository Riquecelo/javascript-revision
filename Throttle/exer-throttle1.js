const eventos = document.querySelector("#eventos")
const execucoes = document.querySelector("#execucoes")

let contagemScroll = 0
let contagemThrottle = 0

function verificarScroll() {
    ++contagemThrottle
    execucoes.textContent = contagemThrottle
}

function throttle(callbck, tempo) {
    let executando = false

    return () => {
        if(executando) return

        executando = true
        callbck()
        setTimeout(() => {
            executando = false
        },tempo)
    }
}

const ativar = throttle(verificarScroll, 1000)

window.addEventListener("scroll", () => {
    ++contagemScroll
    eventos.textContent = contagemScroll
    ativar()
})