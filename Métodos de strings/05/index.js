const numeroCartao = '1111222233334444';

let sequenciaInical = numeroCartao.slice(0, 4);
let segundaSequencia = numeroCartao.slice(4, 8);
let terceiraSequencia = numeroCartao.slice(8, 12);
let quartaSequencia = numeroCartao.slice(12, 16);
let cartaoOcultado = sequenciaInical + segundaSequencia.replace(segundaSequencia, "****") + terceiraSequencia.replace(quartaSequencia, "****") + quartaSequencia;

console.log(cartaoOcultado);