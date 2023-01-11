const texto = "Aprenda programar do zero na Cubos Academy";

const arrayTexto = texto.split(" ");

let novoTexto = "";
for (let item of arrayTexto) {
    let primeiraLetraTexto = item.slice(0, 1);
    let restanteLetraTexto = item.slice(1);

    novoTexto += primeiraLetraTexto.toLowerCase() + restanteLetraTexto + "-";
};
console.log(novoTexto.slice(0, -1));