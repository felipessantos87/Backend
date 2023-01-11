const comentario = "Esse COVID é muito perigoso!";
const letraMinuscula = comentario.toLowerCase();
if (letraMinuscula.includes("covid") || letraMinuscula.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
};