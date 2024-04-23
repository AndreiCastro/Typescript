export class Cliente {
    constructor(nome, idade, telefones, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.telefones = telefones;
        this.endereco = endereco;
    }
    falar() {
        console.log(`My name is: ${this.nome} I have ${this.idade} years old.`);
    }
    mostrarTelefone() {
        console.log(`My phone number is: ${this.telefones[0].numero}`);
    }
}
