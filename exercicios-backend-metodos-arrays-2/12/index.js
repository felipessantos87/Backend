const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const programadoresMaiorDe20 = pessoas.filter((pessoa)=>{
    return pessoa.profissao === 'Programador' && pessoa.idade > 20;
});

const jornalistaMaiorDe30 = pessoas.filter((pessoa)=>{
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30;
});

const encontrarPessoasJovens = pessoas.filter((pessoa)=>{
    return pessoa.profissao === 'Programador','Jornalista' && pessoa.idade > 15 && pessoa.idade < 29;
});

console.log(programadoresMaiorDe20);
console.log(jornalistaMaiorDe30 );
console.log(encontrarPessoasJovens );
