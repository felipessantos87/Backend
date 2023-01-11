function calculateSalary(salarioFixo, valorDasVendas) {
    let b = valorDasVendas;
    let salario = 0;
    if (b <= 1200) {
      salario = (b / 100) * 3 + salarioFixo;
      return salario;
    } else {
      salario = ((b - 1200) / 100) * 5 + (1200 / 100) * 3 + salarioFixo;
      return salario;
}
}

  function cashMachine(valorDoSaque, salarioFixo, valorDasVendas) {
    let a = valorDoSaque;
    let salario = calculateSalary(salarioFixo, valorDasVendas);
    salario = salario - valorDoSaque;
    let notaDe200 = 0;
    let notaDe100 = 0;
    let notaDe50 = 0;
    let notaDe20 = 0;
    let notaDe10 = 0;
    let notaDe5 = 0;
    let notaDe2 = 0;

    while (a > 199) {
      a = a - 200;
      notaDe200++;
}
    while (a > 99) {
      a = a - 100;
      notaDe100++;
}
    while (a > 49) {
      a = a - 50;
      notaDe50++;
}
    while (a > 19) {
      a = a - 20;
      notaDe20++;
}
    while (a > 9) {
      a = a - 10;
      notaDe10++;
}
    if (a < 10 && a % 2 === 0) {
      while (a > 1) {
        a = a - 2;
        notaDe2++;
    }
}
    if (a < 10 && a % 2 !== 0) {
      while (a > 4) {
        a = a - 5;
        notaDe5++;
    }
      while (a > 1) {
        a = a - 2;
        notaDe2++;
    }
}
    return (
    "São " +
    notaDe200 +
    " notas de R$200, " +
    "são " +
    notaDe100 +
    " notas de R$100, " +
    "são " +
    notaDe50 +
    " notas de R$50, " +
    "são " +
    notaDe20 +
    " notas de R$20, " +
    "são " +
    notaDe10 +
    " notas de R$10, " +
    "são " +
    notaDe5 +
    " notas de R$5, " +
    "são " +
    notaDe2 +
    " notas de R$2, " +
    "o salário restante é R$ " +
    salario +
    " seu saque foi de R$ " +
    valorDoSaque);
}
  
  function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinima) {
    let valor = (quantidadeMaxima - quantidadeMinima) / 2;
    if (valor <= quantidadeAtual) {
      return "Não efetuar comprar";
    } else {
      return "Efetuar compra";
    }
}

  function calculateAge(anoNasc, anoAtual) {
    let idade = anoAtual - anoNasc;
    let idadeMeses = idade * 12;
    let idadeDias = idade * 365;
    let idadeSemanas = idade * 52;
    return ( "Idade em anos:" + idade + "idade em meses: " + idadeMeses + " idade em semanas:" + idadeSemanas + " idade em dias: " + idadeDias);
}

  function getDiagonal(a) {
    let string = " ";
    let n = a.length;
    for (i = 0; i < n; i++) {
      string += " " + a[i][i] + ",";
    }
    return string;
}
   