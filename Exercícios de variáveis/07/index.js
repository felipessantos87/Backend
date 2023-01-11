let populacaoInicial = 1000;
let infectadosPorPessoa = 4; 
let tempoInfectar = 100; 

totalDeInfequitados = Math.ceil (populacaoInicial * infectadosPorPessoa  ** (tempoInfectar / 7))
console.log(`No final de ${tempoInfectar} dias serão ${totalDeInfequitados} pessoas infectadas.`)