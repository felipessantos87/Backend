let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0")
let formatado = "";
let nomeMaiusculo = nome.split(" ");
for (let item of nomeMaiusculo){
    let primeiraLetraNome = item.slice(0,1);
    let restanteLetraNome = item.slice(1);
    formatado += primeiraLetraNome.toUpperCase() + restanteLetraNome + " ";
};

email = email.trim();

console.log(identificador);
console.log(formatado);
console.log(email);