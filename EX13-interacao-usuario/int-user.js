function coletarItens(categoria, quantidade) {
    let itens = [];
    for (let i = 0; i < quantidade; i++) {
        let item = prompt(`Digite ${i + 1}ª ${categoria} desejada:`);
        document.write(item + "<br>");
        itens.push(item);
    }
    return itens;
}

let frutas = coletarItens("fruta", 4);
let comidas = coletarItens("comida", 4);
let bebidas = coletarItens("bebida", 4);
