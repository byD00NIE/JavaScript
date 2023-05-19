function gerar() {
    var num = document.getElementById('number').value

    document.getElementById("resultado2").innerHTML = `Multiplos de ${num} <br>`


    for (var mult = 1; mult <= 10; mult++) {
        var multiplicacao = num * mult
        document.getElementById("resultado").innerHTML += `<br> ${num} X ${mult} = ${multiplicacao}`
    }
}
