~~~JavaScript 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
var comissaoQtdeCarros = qtdeCarrosVendidos * 100
var comissaoValorVendaCarros = (valorTotalVendas * 0.05)
var valorSalarioAPagar = comissaoValorVendaCarros + comissaoQtdeCarros
return valorSalarioAPagar + 2000 // 2mil salário base funcionário
}
~~~ 