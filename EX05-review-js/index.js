// const idade = 10 

// if(idade<=17){
//     console.log("Você é uma criança")
// }else if(idade<=60){
//     console.log("Você é um adulto")
// }else{
//     console.log("Você é um idoso")
// }

// AND = &&
// OR = ||

// ATIVIDADE
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3)/3

if(media >8){
    alert("Parabéns pelo empenho")
}else if(media>=6 && media <=8){
    alert("Boa chegou lá")
}else{
    alert("Infelizmente foi reprovado")
}

console.log(media)
