const letras = ["A", "a", "B", "C", "E", "e"];
let letrasEncontradas = 0;

for (let escrita of letras) {
    if (escrita === "E" || escrita === "e") {
        letrasEncontradas++
    }
}
    if (letrasEncontradas > 0) {
        console.log(`Foram encontradas ${letrasEncontradas} letras "E" ou "e".`);
    } else {
        console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
}