const cpf = "12345678900";
const cnpj = "12345678900";

function validaCpfCnpj(tipo, dadosVerificados) {
    if (tipo === "CNPJ" && dadosVerificados.length === 14) {
        console.log(`${dadosVerificados.slice(0, 2)}.${dadosVerificados.slice(2, 5)}.${dadosVerificados.slice(5, 8)}/${dadosVerificados.slice(8, 12)}-${dadosVerificados.slice(12, 14)}`);
    } else if (tipo === "CPF" && dadosVerificados.length === 11) {
        console.log(`${dadosVerificados.slice(0, 3)}.${dadosVerificados.slice(3, 6)}.${dadosVerificados.slice(6, 9)}-${dadosVerificados.slice(9, 11)}`);
    } else {
        console.log(`${tipo} inválido`);
    }
};

validaCpfCnpj("CNPJ", "12345678900");
validaCpfCnpj("CNPJ", "12345678000199");
validaCpfCnpj("CPF", "123456789");
validaCpfCnpj("CPF", "12345678900");