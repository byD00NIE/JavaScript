
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
   confirm("iae, " + nome2 + ", de boa na lagoa?")
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

console.log(typeof none)
console.log(nome + ` ` + Sobrenome)

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
console.log("n1 = " + n1 + ' e o n2 = ' + n2)

console.log(`n1 = ${n1} e o n2 = ${n2}`)



var salario = 1290.85

//Posso somar a variavel com ela mesma
salario = salario + 200

console.log(salario)


console.log("Olá, " + nome + " você tem " + idade + " anos")

console.log(`Olá, ${nome} você tem ${idade} anos`)

if (salario > 1200) {
   console.log("bom")
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

function BotaoCidade() {
   var cidade = document.getElementById("cidade").value
   document.getElementById("resultadoCidade").innerHTML += `<br> O nome da cidade ${cidade}`
}

//operadoes Aritméticos e Ordem de precedência
var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma) // 7 
var opSubtracao = 5 - 2 //Operador de subtração - 
console.log(opSubtracao) // 3
var opMultiplicacao = 5 * 2 //operdor de multiplicação *
console.log(opMultiplicacao) // 10
var opDivisao = 5 / 2 //Operador de divisão
console.log(opDivisao) // 2.5
var opExponenciacao = 5 ** 2 //Operador de exponenciação **
console.log(opExponenciacao) // 25
var opResto = 5 % 2 //Operdor de resto da divisão %
console.log(opResto) //1
//Ordem de precedencia
var OrdemPrecedencial = 5 + 3 / 2
console.log(OrdemPrecedencial) // 6.5
var OrdemPrecedencial2 = (5 + 3) / 2
console.log(OrdemPrecedencial2) // 4
/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
*/
//Constatntes - o valor não pode ser alterado depois de atribuido 
const p1 = 3.14
// pi = 3 - Se o valor for alterado dará erro no javascript

//Auto atribuido
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n = + 3 // quer dizer o mesmo que a expressão acima

n++ // quando precisamos somar +1 ao valor da variável
n-- // quando precisamos subtrair -1 ao valoe da variável

//Operadores Racionais
var n2 = 5
var n2 = 6
console.log(n1 > n2) // > Maior que
console.log(n1 < n2) // < Menor que
console.log(n1 >= n2) // >= Maior ou igual que
console.log(n1 => n2) // => Menor ou igual que
console.log(n1 == n2) // Igual
console.log(n1 != n2) // != Não igual - Diferente

//Estrutura condicionais
if (n1 > n2) {    //Verificnado a condição emtre parenteses
   //  Se a condição for verdadeira "entra" nesse bloco
   console.log("O n1 é maior que o n2")
}

else {
   //  Se a condição NÂO for verdadeira "entra" nesse bloco ELSE
   console.log("o n1 não é maior que o n2")
}

//Exemplo de condição
var minhaIdade = 18
if (minhaIdade >= 16) {
   console.log("Você pode votar")
} else {
   console.log("Você não pode votar")
}

//debugger
//podemos utilizar o debugger para analisar o código linha a linha
//return
//Quando queremos parar de executar para de executar uma função do JS

//Para sorteamos um valor aleatório ultilizamos o Math.random( )
//O Marh.random retorna um número decimal e precisamos multiplicar pelo nr
//maximo que desejamos
//O parsent ultilzamos para obter aoenas a parte inteira do número
var nrSorteador = parseInt(Math.random() * 100)
console.log(nrSorteador)

//Swith Case
//É como se fosse vários if else de forma mais simples
var diaSemana = 3
switch (diaSemana) {
   case 1:
      console.log("hoje é: Domingo")
      break  //Para o swith case e não verifica as outras opções
   case 2:
      console.log("Hoje é: Segunda")
      break
   case 3:
      console.log("Hoje é: Terça")
      break
   case 4:
      console.log("Hoje é: Quarta")
      break
   case 5:
      console.log("Hoje é: Quinta")
      break
   case 6:
      console.log("Hoje é: Sexta")
      break
   case 7:
      console.log("Hoje é:Sábado")
      break
   default:
      console.log("Dia inválido")
}

var cont = 1
while (cont <= 5) {
   console.log(cont)
   cont++
}

for (var cont = 1; cont <= 5; cont++) {
   console.log(cont)
}