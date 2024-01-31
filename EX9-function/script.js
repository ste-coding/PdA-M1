/*Crie uma função que cumprimente o usuário pelo nome que ele informar utilizando um alert. Para isso, utilize a função prompt para pedir que o usuário, o armazene em uma variável e informe o nome juntamente com o cumprimento, a mensagem de cumprimento deve ser do tipo “Olá, {nome informado}!”.*/

/*crie 4 funcoes representando as 4 operacoes matematicas
// onde cada funcao vai pegar 2 valores e calcular baseado 
// na operacao definida pelo nome da funcao */

function username() {
    let name = prompt("Informe o seu nome:");
    alert(`Seja bem-vindo(a), ${name} !`);
}

function chooseOperation(valor1, valor2) {
    let operation = prompt("Escolha a operação (soma, subtração, multiplicação, divisão):");
    
    switch (operation.toLowerCase()) {
        case "soma":
            sum(valor1, valor2);
            break;
        case "subtração":
            subtract(valor1, valor2);
            break;
        case "multiplicação":
            multiply(valor1, valor2);
            break;
        case "divisão":
            divide(valor1, valor2);
            break;
        default:
            alert("Operação não reconhecida.");
            break;
    }
}

function sum(valor1, valor2) {
    let result = valor1 + valor2;
    alert(`O total da soma é: ${result}`);
}

function subtract(valor1, valor2) {
    let result = valor1 - valor2;
    alert(`O total da subtração é: ${result}`);
}

function multiply(valor1, valor2) {
    let result = valor1 * valor2;
    alert(`O total da multiplicação é: ${result}`);
}

function divide(valor1, valor2) {
    if (valor2 !== 0) {
        let result = valor1 / valor2;
        alert(`O total da divisão é: ${result}`);
    } else {
        alert("Divisão por zero não é permitida.");
    }
}

username();
let valor1 = parseFloat(prompt("Digite o primeiro número:"));
let valor2 = parseFloat(prompt("Digite o segundo número:"));
chooseOperation(valor1, valor2);