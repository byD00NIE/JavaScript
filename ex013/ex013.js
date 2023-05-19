function sortear() {
    var nome = document.getElementById("name").value;

    var nrSorteador = Math.floor(Math.random() * 12) + 1;

    var mes = nrSorteador;

    switch (mes) {
        case 1:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Janeiro`;
            break;
        case 2:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Fevereiro`;
            break;
        case 3:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Março`;
            break;
        case 4:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Abril`;
            break;
        case 5:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Maio`;
            break;
        case 6:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Junho`;
            break;
        case 7:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Julho`;
            break;
        case 8:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Agosto`;
            break;
        case 9:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Setembro`;
            break;
        case 10:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Outubro`;
            break;
        case 11:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Novembro`;
            break;
        case 12:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar em Dezembro`;
            break;
    }
}
