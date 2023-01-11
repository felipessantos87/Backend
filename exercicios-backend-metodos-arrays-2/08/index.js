const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArrayFrutas = frutas.map((fruta, indice)=>{
    const primeiraLetraMaiuscula = fruta.slice(0,1).toLocaleUpperCase();
    const restanteDasLetras = fruta.slice(1).toLowerCase();
    const arrayFormatado = primeiraLetraMaiuscula + restanteDasLetras;
    return `${indice} - ${arrayFormatado}`;
});

console.log(novoArrayFrutas);