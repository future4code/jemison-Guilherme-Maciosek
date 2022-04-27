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

//------------------------------------------------------------------------------------------------------------//