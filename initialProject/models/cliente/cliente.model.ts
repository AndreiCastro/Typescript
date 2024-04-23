import { Endereco } from "./endereco.model";
import { Telefone } from "./telefone.model";

export class Cliente {
    nome: string;
    idade: number;
    telefones: Telefone[];
    endereco: Endereco;

    constructor(nome: string, idade: number, telefones: Telefone[], endereco: Endereco) {
        this.nome = nome;
        this.idade = idade;
        this.telefones = telefones;
        this.endereco = endereco;

    }

    falar() {
        console.log(`My name is: ${this.nome} I have ${this.idade} years old.`)
    }

    mostrarTelefone(){
        console.log(`My phone number is: ${this.telefones[0].numero}`)
    }
}