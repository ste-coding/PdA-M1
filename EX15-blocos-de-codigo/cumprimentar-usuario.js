function cumprimentarUsuario() {
    let nome = prompt("Por favor, insira seu nome:");
    if (nome) {
        alert("Olá, ${nome}!");
    } else {
        alert("Você não inseriu um nome. Por favor, tente novamente.");
    }
}

cumprimentarUsuario();
