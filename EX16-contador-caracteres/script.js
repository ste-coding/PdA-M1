function exibirContagemDeCaracteres(nomeCompleto) {
    // Calcula o total de caracteres no nome completo
    var totalCaracteres = nomeCompleto.length;

    // Exibe o nome completo e a quantidade total de caracteres em um parágrafo HTML
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = nomeCompleto + " = " + totalCaracteres;
}

// Chamada da função com um exemplo de nome completo
var nomeCompleto = "Marian Croak";
exibirContagemDeCaracteres(nomeCompleto);
