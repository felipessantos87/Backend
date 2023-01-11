const express = require("express");
const app = express();

let minutos = 0;
let segundos = 0;
let contando = false;
let intervalo = false;

const ativarCronometro = () => {
  contando = true;
  if (!intervalo) {
    setInterval(() => {
      if (contando) {
        if (segundos === 59) {
          segundos = 0;
          minutos++;
        } else {
          segundos++;
        }
      }
    }, 1000);
  }
  intervalo = true
};

app.get("/", (requisacao, resposta) => {
  resposta.send(`Tempo atual do cronômetro: ${String(minutos).padStart(2, "0")} : ${String(segundos).padStart(2, "0")}`);
});

app.get("/iniciar", (requisacao, resposta) => {
  resposta.send(`Cronometro iniciado!`);
  ativarCronometro();
    
});

app.get("/pausar", (requisacao, resposta) => {
  resposta.send(`Cronometro pausado!`);
  contando = false;
});

app.get("/zerar", (requisacao, resposta) => {
  resposta.send(`Cronometro zerado!`);
  minutos = 0;
  segundos = 0;
});

app.get("/continuar", (requisacao, resposta) => {
  resposta.send(`Cronometro zerado!`);
  contando = true;
});

app.listen(8000);