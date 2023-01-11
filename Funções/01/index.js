const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

const correcaoDaProva = (prova) => {
    let acertouQuestoes = 0;
    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta)
        acertouQuestoes++
    }
    let valorQuestao = prova.valor / prova.questoes.length;
    let notaTotal = valorQuestao * acertouQuestoes
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertouQuestoes} questões e obteve nota ${notaTotal}.`)

}
correcaoDaProva(prova);