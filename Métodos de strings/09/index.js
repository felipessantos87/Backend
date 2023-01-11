const nome = 'Guido Cerqueira';

function criarNickname(nome) {
    const index = nome.slice(0, 0);
    const incluindo = nome.replace(index, "@");
    let formatacaoNickname = incluindo.toLowerCase();

    while (formatacaoNickname !== formatacaoNickname.replace(" ", "")) {
        formatacaoNickname = formatacaoNickname.replace(" ", "");
    };

    const namePronto = formatacaoNickname.slice(0, 13);
    console.log(namePronto);
;}

criarNickname(nome);