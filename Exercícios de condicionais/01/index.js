const jogada1 = "pedra"
const jogada2 = "tesoura"
const jogada3 = "papel"

// Começando jogada com Pedra;
if (jogada1){
    if (jogada2){
        console.log(`${jogada1} foi a vencedora.`);
    } else if (jogada1){
        console.log("empatou.");
    } else if (jogada3){
        console.log(`${jogada3} foi a vencedora.`);
    }
}

// Começando jogada com tesoura
if (jogada2){
    if (jogada2){
        console.log("empatou.");
    } else if (jogada1){
        console.log(`${jogada1} foi a vencedora.`);
    } else if (jogada3){
        console.log(`${jogada3} foi a vencedora.`);
    }
}

//Começando jogada com papel
if (jogada3){
    if (jogada1){
        console.log(`${jogada1} foi a vencedora`);
    } else if (jogada2){
        console.log(`${jogada2} foi a vencedora!`);
    } else if (jogada3){
        console.log("Deu empate!");
    }
}