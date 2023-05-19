function login() {
    
    var user = document.getElementById("user").value

    var password = document.getElementById("password").value

    if (user == "admin" && password == "1234") {
        document.getElementById("resultado").innerHTML +=
        `<p class=cor> Login efetuado com sucesso</p>
        <br> <a class=cor3 href="https://www.youtube.com/shorts/HpUuLBO5o1M">🔓</p>`
        //true
    } else {
        document.getElementById("resultado").innerHTML =
        `<p class=cor2> Usuário ou senha incorretos</p>`        
        //false
    }





}