function calcularSalario (quantidadesDeCarrosVendidos,ValorTotalDaVenda){
 let salario = 2000
 let comissao = valorTotalDasVendas *5/100
 
 const comissaoCarrosVendidos = quantidadesDeCarrosVendidos * 100 
 const comissaoVendedor = comissao + comissaoCarrosVendidos
 const salarioTotal = salario + comissaoDoVendedor 

 console.log(salarioTotal)
}

calcularSalario (3, 130000)