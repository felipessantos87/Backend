const nomeArquivo = 'Foto da Familia.pdf';
const nomeArquivo1 = 'Foto da Familia.png';
const nomeArquivo2 = 'Foto da Familia.jpg';
const nomeArquivo3 = 'Foto da Familia.jpeg"';
const nomeArquivo4 = 'Foto da Familia.gif';
const nomeArquivo5 = 'Foto da Familia.doc';
const nomeArquivo6 = 'Foto da Familia.xml';

function recebeFormato(nomeArquivo) {
    if (nomeArquivo.includes("jpg") === true || nomeArquivo.includes("jpeg") === true || nomeArquivo.includes("gif") === true || nomeArquivo.includes("png") === true) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    };
};

recebeFormato(nomeArquivo);
recebeFormato(nomeArquivo1);
recebeFormato(nomeArquivo2);
recebeFormato(nomeArquivo3);
recebeFormato(nomeArquivo4);
recebeFormato(nomeArquivo5);
recebeFormato(nomeArquivo6);
