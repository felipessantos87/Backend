const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const aula01 = {
    identificador: 01,
    nomeDaAula: 'Introdução a programação'
}
curso.aulas.push(aula01);

const aula02 = {
    identificador: 02,
    nomeDaAula: 'Variáveis'
}
curso.aulas.push(aula02);

const aula03 = {
    identificador: 03,
    nomeDaAula: 'Condicionais'
}
curso.aulas.push(aula03);

const aula04 = {
    identificador: 04,
    nomeDaAula: 'Array'
}
curso.aulas.push(aula04);

console.log(curso);