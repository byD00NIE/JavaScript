var nrSorteador = parseInt(Math.random() * 100) + 1

var tentativas = 0

function button() {
    var nr = prompt ("Digite um número")

    tentativas ++

    if (nr < nrSorteador) {
        document.getElementById("resultado").innerHTML +=
        `Você chutou ${nr}, o número que pensei é maior <br>`
    } else if (nr > nrSorteador) {
        document.getElementById("resultado").innerHTML +=
        `Você chutou ${nr}, o número que pensei é menor <br>`
    } else if (nr == nrSorteador) {
    document.getElementById("resultado").innerHTML +=
    `<strong> Você acertou, o número ${nr} foi o que eu pensei 🏆`
    }
    
}

function neww() {
    location.reload()
}

