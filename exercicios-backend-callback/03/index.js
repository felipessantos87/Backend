const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

let array = 0;
for (let i = 0; i < jogadores.length; i++) {
    array++;
}

let jogadasExecutadas = 0;

const jogadas = (tempo) => {
    let tempoJogada = (tempo / array) * 1000;

    const callback = () => {
        console.log(jogadores[jogadasExecutadas]);
        jogadasExecutadas++
        if (jogadasExecutadas === array) {
            clearInterval(id);
            console.log('A rodada terminou!');
        }

    }
    const id = setInterval(callback, tempoJogada);
}
jogadas(10);