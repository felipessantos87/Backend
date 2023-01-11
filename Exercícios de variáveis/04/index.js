let capitalInvestido = 1000;
let taxaJuros = 0.125;
let tempoMeses = 5;
montante = Math.ceil (capitalInvestido * (1 + taxaJuros) ** tempoMeses) 

console.log(`O valor a ser pago no fim do empréstimo é R$ ${montante} reais.`);