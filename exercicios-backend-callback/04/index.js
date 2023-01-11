const timerAlarme = (tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos) => {
    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);

    let numerosBeeps = 0;

    const disparando = () => {
        clearInterval(idDisparo);
        const disparoInterno = () => {
            if (numerosBeeps < tempoAlarmandoEmSegundos) {
                console.log('Beep beep!');
                numerosBeeps++;
            } else if (numerosBeeps >= tempoAlarmandoEmSegundos) {
                clearInterval(paraBeep);
                console.log('Alarme finalizado');
            }
        }
        const paraBeep = setInterval(disparoInterno, 1000);
    }
    const idDisparo = setInterval(disparando, tempoParaAlarmarEmSegundos * 1000);
}

timerAlarme(10, 5);