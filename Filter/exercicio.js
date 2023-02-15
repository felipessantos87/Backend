const professores = [
    { nome: 'Guido', stack: 'backend' },
    { nome: 'Vidal', stack: 'backend' },
    { nome: 'Dani', stack: 'frontend' },
    { nome: 'Diego', stack: 'frontend' },
    { nome: 'Léo', stack: 'backend' },
    { nome: 'Ruli', stack: 'frontend' }
];

const resultadoBackend = professores.filter((professor) => {
    return professor.stack === 'backend';
});

console.log(resultadoBackend);

const resultadoFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend';
});

console.log(resultadoFrontend);
