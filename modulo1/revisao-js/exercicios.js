// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
             
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a,b) => a-b)
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      numerosPares.push(numero)
    }
  }
return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosAoQuadrado = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      numerosAoQuadrado.push(numero ** 2)
    }
  }
return numerosAoQuadrado
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for (let numero of array) {
    if (numero > maior){
    maior = numero
    }
  }
return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = 0
    if (num1 > num2) {
      maiorNumero = num1
    } else {maiorNumero = num2}
 
  let maiorDivisivelPorMenor = ""
    if (num1 / num2) {
      maiorDivisivelPorMenor = false
    }
  let diferenca = (num1 - num2) *-1

 
  
   
   
  return final = {maiorNumero, maiorDivisivelPorMenor, diferenca}}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}