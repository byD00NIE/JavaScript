
//O alert é utilizado para exibir uma mensagem em popup//
//alert("Olá mundo")


/* Comentários
   em múltiplas
   linhas

*/

// Comentário em uma linha //


//Tipo de exibição de mensagens no console
console.log("Olá mundo, estou utilizando o console")

console.error("Esta é uma mensagem de erro")


console.warn("Esta é uma mensagem de aviso")


console.info("Esta é uma mensagem de informação")




//Criando uma função chamada quando clicamos no botão
function Botao1() {
   alert("Você clicou no botão")
   
}

function BotaoCorFundo() {
   document.body.style.backgroundColor = "green"
}

function BotaoNome() {
    //prompt abre opção para digitar algo
    var nome2 = prompt("Qual é o seu nome?")
	confirm ("iae, " + nome2 +", de boa na lagoa?")
}


//Declarando variáveis
//String - Conjunto de caracteres - Declarar com "" ou ``
var nome = "Victor"
var Sobrenome = "Fabiano"
//Number - Todo número em JS é do tipo Number -
//Declarar sem ""
var idade = 16
//Boolean - Somento recebe true ou false
var aprovado = true

console.log (typeof none) 
console.log (nome + ` ` + sobrenome)

var n1 = 10
var n2 = 15
// Irá somar as 2 vaiaveis number (25)
console.log(n1 + n2)


var n3 = "10"

var n4 = "15"

//Irá juntar as 2 variaveis ("1015")
console.log(n3 + n4)
//Se utilizarmos o + com string ele se junta



//Uma variavel pode receber o valor de outra variavel n1 = n2
console.log ("n1 = " + n1 + ' e o n2 = ' + n2)

console.log (`n1 = ${n1} e o n2 = ${n2}`)



var salario = 1290.85

//Posso somar a variavel com ela mesma
salario = salario + 200

console.log(salario)


console.log("Olá, " + nome + " você tem " + idade + " anos")

console.log(`Olá, ${nome} você tem ${idade} anos`)

if (salario > 1200) {
   console.log ("bom")
} else {
   console.log("ruim")
}

function BotaoSomar() {
	var nr1 = prompt("Digite um número")

	var nr2 = promp("Digite outro número")
	console.log(typeof nr1)
	var soma = nr1 + nr2

	alert(soma)

}


function botaosomar() {
   
   var num1 = Number(prompt("Digite o primeiro número"))
   var num2 = Number(prompt("Digite o segundo número"))

   var soma = num1 + num2

   document.getElementById("res-soma").innerHTML = soma
}

function BotaoCidade(){
    var cidade = document.getElementById("cidade").value
    document.getElementById("resultadoCidade").innerHTML += `<br> O nome da cidade ${cidade}`
}