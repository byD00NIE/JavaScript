function gerar() {
    var num1 = document.getElementById('number').value;

    for (var i = 1; i <= num1; i++) {
        document.getElementById('resultado').innerHTML += `<img src="img/gui.png" class="gui"">`
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
    docuument.getElementById('number').innerHTML = '';

}

//Aqui é outra coisa (Jogo do bixu)

function caio() {
    var heitor = document.getElementById('resultado2').innerHTML;

    for (var heitores = 1; heitores <= 1; heitores++) {
        document.getElementById('resultado2').innerHTML += `<img src="/ex018/img/hector quebra munheca.png" class="heitor"">`
    }
}

function apagar() {
    document.getElementById('resultado2').innerHTML = ''
}