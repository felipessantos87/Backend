const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if(idade < 12 || idade > 65 || altura < 150 || possuiPatologia === true){
    console.log("ACESSO NEGADO");
}else if( ehEstudante === true || idade < 18){
    console.log("10 reais");
}else {
    console.log("20 reais");
}