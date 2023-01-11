const cpf = "011.022.033-44";

function removePontoCpf(cpf) {
    while (cpf !== cpf.replace(".", "")) {
        cpf = cpf.replace(".", "");
    };
    while (cpf !== cpf.replace("-", "")) {
        cpf = cpf.replace("-", "");
    };
    while (cpf !== cpf.replace("/", "")) {
        cpf = cpf.replace("/", "");
    };
    return cpf;
};

console.log(removePontoCpf(cpf));