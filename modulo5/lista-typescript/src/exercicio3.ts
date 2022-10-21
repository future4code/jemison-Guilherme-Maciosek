type filmes = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    nota?:number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function films (filmes:filmes):filmes {
    return {nome: filmes.nome, anoLancamento: filmes.anoLancamento, genero: filmes.genero, nota:filmes.nota}
}