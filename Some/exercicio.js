const arquivos = [
    'teste.tx',
    'foto.png',
    'contrato.doc',
    'instalador.exe'
];

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtensao = arquivo.indexOf('.bat');
        return existeExtensao !== -1;
    });
    if (resultado) {
        console.log('Vírus detectado');
    } else {
        console.log('Nenhum vírus encontrado')
    }
}
antiVirus(arquivos);