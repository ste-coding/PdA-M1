function verificador(valor) {
    if (valor % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}
var valor = 4;
console.log(verificador(valor));