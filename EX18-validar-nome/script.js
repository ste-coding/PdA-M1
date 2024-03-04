let nome = prompt("Por favor, digite seu nome:");
while (nome.length < 3) {
    nome = prompt("O nome deve ter no mínimo 3 letras. Por favor, digite novamente:");
}
alert(`Olá, ${nome}! Bem-vindo!`);
