const email = "aluno@cubos.academy";

function verificaEmail(email) {
    const arroba = email.includes("@");
    const ponto = email.includes(".");
    const pontoInicioIndex = email.slice(0, 1);
    const pontoDeInicio = pontoInicioIndex.includes(".");
    const pontoFinal = email.includes(".", email.length - 1);

    if (arroba === true && ponto === true && pontoDeInicio === false && pontoFinal === false) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido");
    }
};

verificaEmail("jose@cubos.academy");
verificaEmail("jose@cubos.academy.br");
verificaEmail("jose.messias@cubos.academy");
verificaEmail("jose.messias@cubos.io");
verificaEmail("jose@cubos");
verificaEmail("jose.messias@cubos");
verificaEmail("jose.messias@.");
verificaEmail("jose.@cubos");
verificaEmail(".@");
verificaEmail("@.");
verificaEmail("jose.messias@cubos.");
verificaEmail(".messias@cubos.");
verificaEmail(".messias@cubos");