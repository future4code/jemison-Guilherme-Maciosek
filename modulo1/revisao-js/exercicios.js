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
  
    if (num1 > num2) {
      maiorNumero = num1
      menorNumero = num2
    } else {
      maiorNumero = num2
      menorNumero = num1
    }
  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
      
  let diferenca = (maiorNumero - menorNumero)

    
  return final = {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let retornaPares = [];
  for (let i = 0; retornaPares.length < n; i += 2) {
    retornaPares.push(i);
  }
  return retornaPares;

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
    } else if (ladoA === ladoB || ladoC === ladoA  || ladoB === ladoC)  {
    return "Isósceles"
    } else { 
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a,b) => a-b)
  let segundo = array[1];
  let penultimo = array[array.length-2];
  let novoArray = []
    novoArray.push(penultimo, segundo)
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const alteracaoCadastro = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return alteracaoCadastro
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
   return pessoas.filter (pessoas => {
     return (pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5)
   }) 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter (pessoas => {
    return (pessoas.idade <= 14 || pessoas.idade > 60 || pessoas.altura < 1.5)
  }) 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  function ordenarPorNome (a,b) {
    if (a.nome < b.nome)
     return -1;
    if (a.nome > b.nome)
    return 1;
  return 0;
  }
  return consultas.sort(ordenarPorNome)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
