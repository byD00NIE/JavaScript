function calculate() {
    var number1 = document.getElementById("number1").value

    var number2 = document.getElementById("number2").value

    var soma = Number(number1) + Number(number2);
    var subtracao = number1 - number2;
    var multiplicacao = number1 * number2;
    var divisao = number1 / number2;
    var resto = number1 % number2;
    var exponenciacao = number1 ** number2;

    document.getElementById("result").innerHTML +=
    ` <br> <br> soma: ${number1} + ${number2} = ${soma} <br> <br>
    subtração: ${number1} - ${number2} = ${subtracao} <br> <br>
    Multiplicação: ${number1} x ${number2} = ${multiplicacao} <br> <br>
    Divisão: ${number1} ÷ ${number2} = ${divisao} <br> <br>
    Resto: ${number1} % ${number2} = ${resto} <br> <br>
    Exponenciação: ${number1} ^ ${number2} = ${exponenciacao}`

}