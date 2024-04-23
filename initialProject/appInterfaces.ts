import { IPessoa } from "./interfaces/pessoa/pessoa.interface";

let pessoa: IPessoa = {
    nome: 'Andrei',
    idade: 32,
    //sexoMasculino: true optional
    telefones: [
        {
            ddd: '11',
            numero: 1234567
        },
        {
            ddd:'12',
            numero: 987654
        }
    ]
}

console.log(pessoa);

//Criei 2 interfaces, uma para dentro da outra. E neste file eu passo os valores para elas.