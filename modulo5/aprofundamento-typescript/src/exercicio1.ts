var minhaString: string = "Guilherme"

// minhaString = 10 // O tipo number não pode ser atribuído ao tipo string

var meuNumero: number | string = 20

meuNumero = "Guilherme" // O tipo string não pode ser atribuído ao tipo number. Foi necessário acrescentar o | para incluir o tipo string

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: corFavorita
}

enum corFavorita {
    vermelha = "vermelha",
    laranja = "laranja",
    amarela = "amarela",
    verde = "verde",
    azul = "azul",
    azulescuro = "azul-escuro",
    violeta = "violeta"
}

var cadastro: pessoa = {
    nome: "Guilherme",
    idade: 30,
    corFavorita: corFavorita.verde
}

