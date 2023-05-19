function verificar() {
    var nome = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    if (idade >= 18) {
        document.getElementById("final1").innerHTML = `<p class=cor> Parabéns ${nome}, você pode tirar CNH
        <br> <img src="/ex009/img/aprovado.png"></p>`

    } else {
        document.getElementById("final1").innerHTML = `<p class=cor2> Que pena ${nome}, você não pode tirar CNH
        <br> <img src="/ex009/img/reprovado.png"></p>`

    }
}