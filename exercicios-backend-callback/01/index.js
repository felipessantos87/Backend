const tabuada = (numeros, callback) => {

    let resultadoTabuada = 0;

    for (let i = 0; i <= 10; i++) {
        resultadoTabuada = numeros * i;
        callback(resultadoTabuada, i, numeros);
    }

}
tabuada(5, (resultadoTabuada, i, numeros) => {
    console.log(`${numeros} * ${i} = ${resultadoTabuada}`);
});