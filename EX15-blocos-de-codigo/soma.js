function soma() {
    let numero1 = parseFloat(prompt("Por favor, insira o primeiro número:"));
    let numero2 = parseFloat(prompt("Por favor, insira o segundo número:"));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let total = numero1 + numero2;
        alert("O total da soma é: ${total}");
    } else {
        alert("Por favor, insira números válidos.");
    }
}

soma();
