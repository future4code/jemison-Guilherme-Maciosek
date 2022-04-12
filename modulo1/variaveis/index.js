let a = 10
let b = 10

console.log(b)


b = 5
console.log(a, b)

//o resultado impresso será "10 5"
////////////////////////////////////////////////////////////////////////////////////////

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

//o resultado impresso será "10 10 10"
////////////////////////////////////////////////////////////////////////////////////////

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//para "p" horasTrabalhadasPorDia / para "t" salarioPorDia
////////////////////////////////////////////////////////////////////////////////////////

let nome = prompt ("Qual o seu nome?")
let idade = prompt ("Qual a sua idade?")
console.log ("Olá", nome, "você tem", idade, "anos.")
////////////////////////////////////////////////////////////////////////////////////////

let corDaCamiseta = prompt ("Sua camiseta é preta?")
let corDaCalca = prompt ("Sua calça é branca?")
let corDoTenis = prompt ("Seu tênis é marrom?")

console.log ("Sua camiseta é preta?", corDaCamiseta,".")
console.log ("Sua calça é branca?", corDaCalca,".")
console.log ("Seu tênis é marrom?", corDoTenis,".")
////////////////////////////////////////////////////////////////////////////////////////

let a = 10
let b = 25
c = a
a = b
b = c
console.log (a, b)
////////////////////////////////////////////////////////////////////////////////////////
//DESAFIO

var a = prompt ("Insira um número.")
var b = prompt ("Insira outro número para realizar a conta.")
var soma = +a + +b
var multiplicaco = a * b
console.log ("O primeiro número somado ao segundo número resulta em:", soma,)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:", multiplicaco,)