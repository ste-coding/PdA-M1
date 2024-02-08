// loop for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// vantagem: a inicialização, a condição e o incremento estão todos na mesma linha
// desvantagem: menos flexível para quando não sabemos de antemão o número de iterações

// loop while
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// vantagem: lida com condições de parada mais complexas
// desvantagem: é mais fácil criar um loop infinito acidentalmente com while
