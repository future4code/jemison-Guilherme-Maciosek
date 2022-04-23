// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = +prompt ("Insira a altura")
const largura = +prompt ("Insira a largura")
console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = +prompt ("Insira o ano atual")
const anoNascimento = +prompt ("Insira o ano do seu nascimento")
console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const NOME = prompt ('Insira seu nome')
const IDADE = +prompt ('Insira sua idade')
const EMAIL = prompt ('Insira seu email')
console.log (`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const coresFavoritas = []
const cor1 = prompt ('Insira sua 1ª cor favortia')
const cor2 = prompt ('Insira sua 2ª cor favortia')
const cor3 = prompt ('Insira sua 3ª cor favortia')
coresFavoritas.push(cor1,cor2,cor3)
console.log (coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const textoUp = prompt ("Texto")
const textoUpp = textoUp.toUpperCase()
return textoUpp
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custo1 = +prompt ("Insira o valor do espetáculo")
  const valorIngresso1 = +prompt ("Insira o valor do ingresso")
  const calculoLucro = (custo1 / valorIngresso1)
  return calculoLucro

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const comparacao1 = prompt ("Insira seu texto")
const comparacao2 = prompt ("Insira seu texto")
const comparacao3 = comparacao1.length
const comparacao4 = comparacao2.length
let resultado = comparacao3 === comparacao4
return resultado
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const lista = []
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const lista = []
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const lista =[]
const ultimoArray = array[array.length-1]
const primeiroArray = array[0]
return (ultimoArray, primeiroArray)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const comparacao1 = prompt ("Insira seu texto")
  const comparacao2 = prompt ("Insira seu texto")
  const comparacao3 = comparacao1.toLowerCase()
  const comparacao4 = comparacao2.toLowerCase()
  const comparacao3Lower = comparacao3.length
  const comparacao4Lower = comparacao3.length

  let resultado = comparacao3 === comparacao4
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}