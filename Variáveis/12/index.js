let capitalInicial = 60000;
let montante = 90000;
let numeroDeMeses = 24;

taxaDeJuros = (montante / capitalInicial) ** (1 / numeroDeMeses) - 1;

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros * 100}%,pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`);