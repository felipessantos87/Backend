const numeros = [8, 11, 4, 1];
let numeroMaior = 0, numeroMenor = 0;

numeromenor = numeros[0];
for (let algarismo of numeros) {
    if (algarismo > numeroMaior) {
        numeroMaior = algarismo;
    } else if (algarismo < numeroMenor) {
        numeroMenor = algarismo;
    }
}
console.log(`${numeroMaior-1}`);
