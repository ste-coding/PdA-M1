let fala1 = "Não sou eu!";
let fala2 = "Eu tentei te ajudar desde o inicio!!";
let fala3 = "Já pensou que o monstro pode ser controlado?";

let tamanhoFala1 = fala1.length;
let tamanhoFala2 = fala2.length;
let tamanhoFala3 = fala3.length;

if(tamanhoFala1 > (tamanhoFala2 && tamanhoFala3)){
    console.log("Suspeito n°1")
}else if(tamanhoFala2 > (tamanhoFala1 && tamanhoFala3)){
    console.log("Suspeito n°2")
}else{
    console.log("Suspeito n°3")
}