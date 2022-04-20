a. array
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //SUBI NUM ÒNIBUS EM MIRROCOS 27
////////////////////////////////////////////////////////////////////////////////////////

const email = prompt ("Insira o seu e-mail")
console.log("O e-mail", email.trim(), "foi cadastrado com sucesso. Seja bem-vinda(o),", email.trim(),"!")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const comidaTroca = prompt ("Digite sua comida favorita para te conhecermos melhor!")
  let listaDeComidasFavoritas = ["Pizza", "Hot-dog", "Pudim", "Coxinha", "Pão-de-Queijo"]
console.log ("Essas são as minhas comidas preferidas:", listaDeComidasFavoritas)
  let i = 0
  let listaAtualizada = listaDeComidasFavoritas[i+1] = comidaTroca
console.log ('listaAtualizada', listaDeComidasFavoritas)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tarefasDoDia =[]
let listaDeTarefas1 = prompt ("Digite a 1 tarefa a ser realizadas")
tarefasDoDia.push(listaDeTarefas1)
let listaDeTarefas2 = prompt ("Digite a 2 tarefa a ser realizadas")
tarefasDoDia.push(listaDeTarefas2)
let listaDeTarefas3 = prompt ("Digite a 3 tarefa a ser realizadas")
tarefasDoDia.push(listaDeTarefas3)

console.log ("Essas são as suas tarefas agendadas:")
    console.log ("1." + tarefasDoDia[0])
    console.log ("2." + tarefasDoDia[1])
    console.log ("3." + tarefasDoDia[2])
let concluidas = +prompt ("Digite o número da atividade concluída")
let finalizadas = tarefasDoDia.splice(concluidas - 1)

console.log (tarefasDoDia)