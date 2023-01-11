const numeros = [54, 22, 14, 87, 10, 284];
let encontreNumeros = -1;

for (let i = 0; i < numeros.length; i++) {
        let algarismo = numeros[i];
        if (algarismo === 10) {
            encontreNumeros  = i;
        break
    }
}
console.log(encontreNumeros);
