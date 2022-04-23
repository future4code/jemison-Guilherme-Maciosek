const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // Resultado False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  // Resultado False

resultado = !resultado && (bool1 || bool2) // Resultado True
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // Resultado booleano
----------------------------------------------------------------------------------------------------------------------------------------------------------------

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// A constante "soma" está concatenando o valor inserido, entendendo como uma string e não número. Para corrigir basta inserir o sinal de "+" antes das variáveis na soma, ficando assim: const soma = +primeiroNumero + +segundoNumero. Desta forma a soma ocorrerá corretamente.

let suaIdade = prompt ("Qual é a sua idade?")
let idadeDoSeuMelhorAmigo = prompt ("Qual é a idade do seu melhor amigo?")

if (+suaIdade > +idadeDoSeuMelhorAmigo) {
    console.log  ("Sua idade é maior do que a do seu melhor amigo em", +suaIdade - +idadeDoSeuMelhorAmigo,"anos.");
} else {
    console.log  ("Sua idade é menor do que a do seu melhor amigo em", +suaIdade - +idadeDoSeuMelhorAmigo,"anos.");
}
----------------------------------------------------------------------------------------------------------------------------------------------------------------

const numeroPar = prompt ("Insira um número par")

const resultado = numeroPar % 2 // O resto da divisão de um número par sempre será 0. Sempre que for número impar o resultado será 1.

console.log (resultado)

----------------------------------------------------------------------------------------------------------------------------------------------------------------
const suaIdade = prompt ("Insira a sua idade")
const idadeMeses = suaIdade * 12
const idadeDias = suaIdade * 365
const idadeHoras = suaIdade * 24 * 365 + +6
console.log ("Sua idade em meses é", idadeMeses,". Em dias", idadeDias, "e em horas", idadeHoras,".")
----------------------------------------------------------------------------------------------------------------------------------------------------------------

const primeiroNumero = +prompt ("Insira um número") // 20
const segundoNumero = +prompt ("Insira outro número") // 10
const resultadoCalculo = primeiroNumero > segundoNumero
const resultadoCalculo2 = primeiroNumero === segundoNumero
const resultadoDivisao = primeiroNumero >= segundoNumero
const resultadoDivisao2 = segundoNumero >= primeiroNumero
console.log (resultadoCalculo, resultadoCalculo2, resultadoDivisao, resultadoDivisao2)