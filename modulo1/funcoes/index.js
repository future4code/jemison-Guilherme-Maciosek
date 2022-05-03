<<<<<<< HEAD
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//***********/ Será impresso: Matheus Nachtergaele, Virginia Cavendish, canal: Globo, horário: 14h
//------------------------------------------------------------------------------------------------------------//

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//***********/ Será impresso: 
//Juca 3 SRD
//Juba 3 SRD
//Jubo 3 SRD
//------------------------------------------------------------------------------------------------------------//

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
//***********/ Será impresso: false e undefined pois a const altura não existe dentro da função
//------------------------------------------------------------------------------------------------------------//


// function cadastro(nome, apelido) {
//     return(nome [apelido])
// }

// const pessoa ={
//     nome: "Amanda",
//     apelido: ["Amandinha", " Mandinha", " Mandi"]
// }

// console.log(`Meu nome é ${cadastro(pessoa, "nome")}, mas pode me chamar de: ${cadastro(pessoa, "apelido")} `)

// const novoApelido = {...pessoa, apelido: ["Dinda", "Manman", "Flor"]
    
// }

// console.log(`Meu nome é ${cadastro(pessoa, "nome")}, mas pode me chamar de: ${cadastro(pessoa, "apelido")} `)

//------------------------------------------------------------------------------------------------------------//


// function retornoCadastro(cadastroEmpresa, cadastroFaculdade) {
// 	return cadastroEmpresa, cadastroFaculdade
// }

// const cadastroEmpresa = {
//   nome: "Pedro", 
//   idade: 40, 
//   profissão: "Biólogo"
// }
// const cadastroFaculdade = {
//     nome: "Pedro", 
//     idade: 32, 
//     profissão: "Carpinteiro"
// }

// console.log(cadastroEmpresa,cadastroFaculdade)
// não possível pela função

=======
//Questão 1 de Interpretação
    //Será Impresso o resultado 10 e 50
    //Caso seja invocada a função sem o console.log, a função irá guardar o valor normalmente sem imprimir.

//Questão 1 de Interpretação
//------------------------------------------------------------------------------------------------------------//
//Questão 2 de Interpretação
    //a. A função irá guardar a informação do texto em minuscolo.
    //b.
        //i. true
        //ii. true
        //iii. true
//------------------------------------------------------------------------------------------------------------//

// EXERCÍCIO 1.A

// function texto () {
//     console.log("Me chamo Guilherme, tenho 30 anos, moro em Curitiba e sou pai da Helena.")   
// }
// texto()
//------------------------------------------------------------------------------------------------------------//

//EXERCÍCIO 1.B

// function cadastroCliente (nome, idade, endereco, profissao) {
//     const nome1 = prompt ("Insira seu nome")
//     const idade1 = +prompt("Insira sua idade")
//     const endereco1 = prompt("Insira seu endereço")
//     const profissao1 = prompt("Insira sua profissão")
//     console.log (`Eu sou ${nome1} tenho ${idade1} anos, moro em ${endereco1} e sou, ${profissao1}`)
// }
// cadastroCliente()
//------------------------------------------------------------------------------------------------------------//

//EXERCÍCIO 2.A

// function soma (primeiroNumero, segundoNumero) {
//     const resultado = primeiroNumero + segundoNumero
//     console.log(resultado)
// }
// soma(5,2)

//EXERCÍCIO 2.B

// function maiorOuIgual (primeiroNumero, segundoNumero) {
//     const resultado = primeiroNumero >= segundoNumero
//     console.log(resultado)
// }
// maiorOuIgual(5,7)

//EXERCÍCIO 2.C

// function parOuNao (primeiroNumero) {
//     const resultado = primeiroNumero % 2
//     const resto = resultado === 0
//     console.log(`O númer é par? ${resto}`)
// }
// parOuNao(55)

//EXERCÍCIO 2.D

// function tamanhoMensagemParaUpperCase () {
//     const tamanhoDaMensagem = ("Eu fui jantar na casa da minha avó")
//     const mensagemFinal = (`A mensagem possui ${tamanhoDaMensagem.length} caracteres. Uma versão em caixa alta é: ${tamanhoDaMensagem.toUpperCase()}`)
//     console.log(mensagemFinal)
    
// }
// tamanhoMensagemParaUpperCase()
//------------------------------------------------------------------------------------------------------------//

//EXERCÍCIO 3

// function calculo (primeiroNumero, segundoNumero) {
//     const soma = +primeiroNumero + +segundoNumero
//     const subtracao = +primeiroNumero - +segundoNumero
//     const multiplicacao = +primeiroNumero * +segundoNumero
//     const divisao = +primeiroNumero / +segundoNumero
//     console.log(`Soma ${soma}`)
//     console.log(`Soma ${subtracao}`)
//     console.log(`Soma ${multiplicacao}`)
//     console.log(`Soma ${divisao}`)
// }
// calculo(30,3)
>>>>>>> 6b162a285250a202a23befc6eb0e2775b980c5e6
//------------------------------------------------------------------------------------------------------------//