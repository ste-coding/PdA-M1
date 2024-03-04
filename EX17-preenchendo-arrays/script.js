// Mão na massa: 3 arrays diferentes, 3 for para adicionar os valores dentro dos array

const frutas = [];

//  será executado para cada elemento do array
document.write("<h4> frutas inseridas </h4>", "<br>");
for(var i = 0; i <=3; i++){

    const frutaInserido = prompt("Digite uma fruta: ");
    frutas.push(frutaInserido);
    document.write(frutaInserido, "<br>");
}

const comidas = [];

// Items adicionados no array, de tamanho 4, de acordo com o que o usuario,
document.write("<h4> Comida inseridas </h4>", "<br>"); 
for(var i = 0; i <= 3; i++){

    const comidaInserido = prompt("Digite uma comida: ");
    comidas.push(comidaInserido);
    document.write(comidaInserido, "<br>");
}
// dica do chat: usar console.table(), fica mais bonitinho e organizado. O formato aparece em tabela
console.table(comidas);

const bebidas = [];
document.write("<h4> bebidas inseridas </h4>", "<br>");
for(var i = 0; i <= 3; i++){

    const bebidaInserido = prompt("Digite uma bebida: ");
    bebidas.push(bebidaInserido);
    document.write(bebidaInserido, "<br>");
}