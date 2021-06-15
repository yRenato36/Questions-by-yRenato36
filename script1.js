function clique() {
    var res = window.document.getElementById('resp')
    var p2 = window.document.getElementById('paragrafo2')
    var result = (res.value)
    if (result === 'manhã') {
        p2.innerHTML = 'Resposta correta. Parabéns'
        p2.style.background = "#4451ff"
        p2.style.color = "white"
        p2.style.borderRadius = "20px" 
    } else if (result === 'manha') {
        p2.innerHTML = 'Está faltando um acento'
        p2.style.background = "#fff129"
        p2.style.color = "black"
        p2.style.borderRadius = "20px"

    } else if (result != 'manhã') {
        p2.innerHTML = 'Resposta incorreta. Tente novamente'
        p2.style.background = "#ff5353"
        p2.style.color = "white"
        p2.style.borderRadius = "20px"
    }
}
function clique1() {
    var botoes = window.document.getElementsByName('rad')
    var res = window.document.getElementById('resul1')
    if (botoes[0].checked) {
        res.innerHTML = `A resposta está errada. Tente novamente`
        res.style.background = "#ff5353"
        res.style.color = "white"
        res.style.borderRadius = "20px"
    } else if (botoes[1].checked) {
        res.innerHTML = `Parabéns, você acertou :)`
        res.style.background = "#4451ff"
        res.style.color = "white"
        res.style.borderRadius = "20px"
    } else {
        res.innerHTML = `Não é essa a resposta. Tente novamente`
        res.style.background = "#ff5353"
        res.style.color = "white"
        res.style.borderRadius = "20px"
    }
}
function clique2() {
    var res = window.document.getElementById("caixa")
    var p3 = window.document.getElementById("paragrafo3")
    var result = (res.value)
    if (result === "noite") {
        p3.innerHTML = "Sua resposta está correta"
        p3.style.background = "#4451ff"
        p3.style.color = "white"
        p3.style.borderRadius = "20px"
    } else {
        p3.innerHTML = "Resposta errada. Tente novamente"
        p3.style.background = "#ff5353"
        p3.style.color = "white"
        p3.style.borderRadius = "20px"
    }
}