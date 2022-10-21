type bankAcc = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
}

const saldoCliente:bankAcc[] =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const negativados = (clientes:bankAcc[]):bankAcc[] => {
    const clienteNegativado = clientes.map ((cliente) => {
        var saldoFinal = cliente.debitos.reduce((entrada1:number, entrada2:number) => entrada1 + entrada2, 0)
        return {cliente: cliente.cliente, saldoTotal: (cliente.saldoTotal - saldoFinal), debitos: []}
    }).filter ((cliente)=> {
        return cliente.saldoTotal < 0
    })
    return clienteNegativado
}