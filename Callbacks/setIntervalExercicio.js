const microondas = (tempo) => {
    let numero = 1;
    
        console.log('Iniciou ...');
    
    const contador = () => {
        console.log(numero);
        numero++;

        if (numero > tempo / 1000) {
            console.log('Finalizou!');
            clearInterval(id);
        }
    }

    const id =setInterval(contador, 1000);
}

microondas(2000);