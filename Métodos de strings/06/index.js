const celular = 7199918888;
const stringDoCelular = String(celular);
const arrayDoCelular = stringDoCelular.split(" ");
const digitoAdicional = "9";

for (let item of arrayDoCelular) {
    if (item.length === 11) {
        console.log(`(${item.slice(0, 2)}) ${item[2]} ${item.slice(3, 7)}-${item.slice(7, item.length)}`);
    } else if (item.length === 10) {
        console.log(`(${item.slice(0, 2)}) ${digitoAdicional} ${item.slice(2, 6)}-${item.slice(6, item.length)}`);
    } else {
        console.log(`${digitoAdicional} ${item.slice(0, 4)}-${item.slice(4, item.length)}`);
    }
};