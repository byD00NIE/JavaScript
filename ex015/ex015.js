function gerar() {
    var num = parseInt(document.getElementById('number').value)

    document.getElementById("resultado2").innerHTML = `Multiplos de ${num} <br>`

    var mult = 1

    while (mult <= 10) {
        document.getElementById('resultado').innerHTML += `<br> ${num} X ${mult} = ${num * mult}`
        mult++
    }
}