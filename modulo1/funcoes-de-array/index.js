/**-------------------------------------------------------------------------- */
// 1.A = Será impresso um novo array com as mesmas informações.
/**-------------------------------------------------------------------------- */
// 2.A = Será impresso apenas o nome no novo array.
/**-------------------------------------------------------------------------- */
// 3.A = Será impresso um novo array com nome e apelido diferentes de Chijo
/**-------------------------------------------------------------------------- */
//-----------------------------------------------------------------------------------------//

// 1.A
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const arrayNomePets = pets.map(
//      (nomePets) => {
//         return nomePets.nome
//  }
// )
//  console.log(arrayNomePets)
/**-------------------------------------------------------------------------- */
// 1.B

// const petsSalsicha = pets.filter(
//     (apenasSalsicha) => {
//         return apenasSalsicha.raca === "Salsicha"
//     }
// )
// console.log (petsSalsicha)
/**-------------------------------------------------------------------------- */
// 1.C

// const filtroPoodle = pets.filter (
//     (poodles) => {
//        if(poodles.raca === "Poodle"){
//             return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}`)
//         }
//     }
// )
/**-------------------------------------------------------------------------- */
// 2.A
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const apenasNomeProdutos = produtos.map(
//      (produto) => {
//          return produto.nome
//      }
//  )
/**-------------------------------------------------------------------------- */
// 2.B
//  const apenasNomeProdutos = produtos.map(
//      (produto) => {
//          return {nome: produto.nome, preco:(produto.preco*0.95).toFixed(2)}
//      }
//  )
//
/**-------------------------------------------------------------------------- */
// 2.C
// const apenasBebidas = produtos.filter (
//     (bebida) => {
//         return bebida.categoria === "Bebidas"
//     }
// )
//
/**-------------------------------------------------------------------------- */
// 2.D 
// const apenasProdutosYpe = produtos.filter (
//     (ype) => {
//         return ype.nome.includes("Ypê")
//     }
// )
// console.log(apenasProdutosYpe)

// /**-------------------------------------------------------------------------- */ //A E É UM MAP DA 2.D
// // 2.E
// const anuncioYpe = apenasProdutosYpe.map (
//     (produto) => {
//     return (`Compre ${produto.nome} por R$ ${produto.preco}.`)
//     }
// )
// console.log(anuncioYpe)
/**-------------------------------------------------------------------------- */
/**-------------DESAFIOS-------------------------- */


// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]
// /**-------------------------------------------------------------------------- */
//  pokemons.sort(function(a, b) {
//     if(a.nome < b.nome) {
//       return -1;
//     } else {
//       return true;
//     }
//   });
     
//  console.log(pokemons)
// /**-------------------------------------------------------------------------- */

// const tipoPokemons = pokemons.map(
//     (classe) => {
//         return classe.tipo
//     }
// )
// const semRepeticao = [... new Set(tipoPokemons)]

// console.log (semRepeticao)