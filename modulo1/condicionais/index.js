//-------------------------------------------------------------------------//
// EXERCÍCIO DE INTERPRETAÇÃO;
//1.A = O código recebe uma string pelo prompt, transforma em número e verifica se ele é divisível por dois//
//1.B = Ele imprime para números pares
//1.C = Ele imprime para números impares
//-------------------------------------------------------------------------//
//2.A = O código irá buscar o preço da fruta escolhida pelo usuário
//2.B = 2.25
//2.C = O código continua sendo executado e irá trazer o próximo valor antes do próximo break
//-------------------------------------------------------------------------//
//3.A = A primeira linha está recebendo e armazenando um número.
//3.B = Para 10 = Esse número passou no teste. Para -10 não haverá resposta, não há else na função.
//3.C = Sim, na linha do let mensagem. É uma linha que não faz parte da lógica, sendo assim ela não é lida durante a execução do bloco.
//-------------------------------------------------------------------------//

// let idade = +prompt ("Insira sua idade")

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// }else{
//     console.log("Você não pode dirigir")
// }
//-------------------------------------------------------------------------//


// let turnoDeEstudo = prompt (`Qual turno você estuda? Digite "M" para manhã, "V" para vespertino ou "N" para Noturno`).toLowerCase()

// if (turnoDeEstudo === "m") {
//     console.log("Bom Dia!")
// } else if (turnoDeEstudo ==="v") {
//     console.log("Boa Tarde!")
//      } else {
//             console.log("Boa Noite")
//         }
//-------------------------------------------------------------------------//

// let turnoDeEstudo = prompt (`Qual turno você estuda? Digite "M" para manhã, "V" para vespertino ou "N" para Noturno`).toLocaleLowerCase()

// switch(turnoDeEstudo) {
//     case ("m"):
//         console.log("Bom dia!")
//         break
//     case ("v"):
//         console.log("Boa Tarde")
//         break
//     case ("n"):
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Insira corretamente o seu turno")
//         break
// }
//-------------------------------------------------------------------------//

// let generoFilme = prompt ("Qual o gênero de filme gostaria de assistir?").toLowerCase()
// let valorIngresso = +prompt ("Qual o valor do ingresso?")

// if (generoFilme === "fantasia" && valorIngresso <= 15) {
//     console.log("Bom filme!")
// } else{
//     console.log("Escolha outro filme :(")
// }