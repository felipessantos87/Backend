const areaA = 6;
const areaB = 6;

if (areaA === areaB) {
    if (areaA === 0 && areaB === 0) {
        console.log("Buca de Branco.");
    } else if (areaA === 1 && areaB === 1){
        console.log(" Bucha de Ás.");
    } else if (areaA === 2 && areaB === 2){
        console.log("Bucha de Duque.");
    } else if (areaA === 3 && areaB === 3){
        console.log("Bucha de Terno.");
    } else if (areaA === 4 && areaB === 4){
        console.log("Bucha de Quadra.");
    } else if (areaA === 5 && areaB === 5){
        console.log("Bucha de Quina.");
    } else if (areaA === 6 && areaB === 6){
        console.log("Bucha de Sena.");
    }
}else{
    console.log("Não deu Bucha.");
}
