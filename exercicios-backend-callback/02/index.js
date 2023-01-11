const tabuada = (arrayNumeros, callback) => {
    
    let resultadoTabuada = 0;
    let contadores = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        for (contadores; contadores <= 10; contadores++){
            resultadoTabuada = arrayNumeros[i] * contadores;
            let arrayResultado = arrayNumeros[i];

            callback(resultadoTabuada, arrayResultado, contadores);
        }
        console.log('--------------');
        contadores = contadores - 11;
    }

}

tabuada([1, 5, 2], (resultadoTabuada, arrayResultado, contadores) => {
    console.log(`${arrayResultado} * ${contadores} = ${resultadoTabuada}`);
})