// var notaJoao = "10";
// var notaMaria = 10;

// console.log("A nota de João é " + notaJoao + " e a nota de Maria é " + notaMaria + ". " + "A soma deles é " + (notaJoao+notaMaria))


const idadeUsuario = prompt("Qual é a sua idade?");
const idade = parseInt(idadeUsuario);

// usando var idadeUsuario = 15

if (idadeUsuario >= 18) {
  console.log("Parabéns! Você está apto para tirar a carteira de habilitação.");
} else {
  console.log("Desculpe, você é menor de idade. Não é permitido tirar a carteira de habilitação.");
}
