function media() {
    var name = document.getElementById("aluno").value

    var nota1 = document.getElementById("nota1").value

    var nota2 = document.getElementById("nota2").value

    var media = (Number(nota1) + Number(nota2)) / 2

    if (nota1 > 10) {
        alert ("Nota 1 não pode ser maior que 10")
        return
    }

    if (nota2 > 10) {
        alert ("Nota 1 não pode ser maior que 10")
        return
    }

    document.getElementById("final").innerHTML = `O aluno ${name} tirou nota ${nota1} e ${nota2}, sua média foi ${media}`

    if (media >= 7) {

        document.getElementById("final2").innerHTML = `<strong> APROVADO </strong>`


    } else {
        document.getElementById("final2").innerHTML = `<strong> REPROVADO </strong>`
    }

}