let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

const timerAlarme = (tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos, tempoSonecaEmSegundos, numeroDeSonecas) => {
    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);

    let numerosBeeps = 0;
    let soneca = 0; 

    const disparando = () => {
        clearInterval(idDisparo);
        const disparoInterno = () => {
            if (numerosBeeps < tempoAlarmandoEmSegundos) {
                console.log('Beep beep!');
                numerosBeeps++;
            } else if (numerosBeeps >= tempoAlarmandoEmSegundos) {
                clearInterval(paraBeep);
               // console.log('Alarme finalizado');
                console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);
                const disparaSoneca = () => {
                    clearInterval(idSoneca);
                    const sonecaInterna = () => {
                        if (soneca < numeroDeSonecas) {
                            console.log(`Beep beep!`);
                            soneca++;
                        } else if (soneca >= numeroDeSonecas) {
                            clearInterval(idSonecaExterna);
                            console.log('Fim do Timer!');
                        }
                    }
                    const idSonecaExterna = setInterval(sonecaInterna, 1000);
                }
                const idSoneca = setInterval(disparaSoneca, tempoAlarmandoEmSegundos * 1000);
            }
        }
        const paraBeep = setInterval(disparoInterno, 1000);
    }
    const idDisparo = setInterval(disparando, tempoParaAlarmarEmSegundos * 1000);
}

timerAlarme(10, 5, 10, 2);



