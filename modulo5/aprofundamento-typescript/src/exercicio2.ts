// Entradas tipo number 


var numeros: any


type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros): Estatistica  {
    maior:number,
	menor:number,
	media:number
}{

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}