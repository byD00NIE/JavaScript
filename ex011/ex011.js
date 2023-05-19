function verificar() {
    var name = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    if (name == "") {
        alert("Digite seu nome!")
        return
    }

    if (idade == "") {
        alert("Digite sua idade!")
        return
    }

    if (idade >= 18 && idade <= 70) {
        document.getElementById("final").innerHTML = `${name}, você é obrigado a votar`

        document.getElementById("final").style.color = "#008000"
    } else if (idade < 16) {
        document.getElementById("final").innerHTML = `${name}, você não pode votar`

        document.getElementById("final").style.color = "red"
    } else {
        document.getElementById("final").innerHTML = `${name}, você não é obrigado a votar`

        document.getElementById("final").style.color = "blue"
    }

}