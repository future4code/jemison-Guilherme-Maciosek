type cadastroBase = {
    nome: string;
    salário: number;
    setor: SETOR;
    presencial: boolean
}

enum SETOR {
    marketing = "marketing",
    vendas = "vendas",
    financeiro = "financeiro",
}

const ativos:cadastroBase[] = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function retornaCadastro (base:cadastroBase[]) {
    const filtro = base.map ((ativo) => {
        let novoArray = ativo
        return
    })
}