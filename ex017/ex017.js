function gerar() {
    for (var i = 1; i <= 20; i++) {

        if (i % 2 != 0) {
            document.getElementById('resultado').innerHTML += `${i} <br>`
        }
    }

}


function gerar2() {
    var num1 = document.getElementById('number1').value
    var num2 = document.getElementById('number2').value

    for (var i = num1; i <= num2; i++) {
        if (i % 2 > 0) {
            document.getElementById('resultado2').innerHTML += `<br> ${i}`
        }
    }
}