function calculate() {
    var num = document.getElementById("number").value

    var num2 = num * 2

    var num3 = num / 2


    document.getElementById("result").innerHTML +=

    `<br> O dobro do número ${num} é ${num * 2} e sua metade é ${num / 2}`
}

function clearResults() {
    document.getElementById("result").innerHTML = ""
    var num = document.getElementById("number").value = ""
}