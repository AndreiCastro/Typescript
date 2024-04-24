import { INumeroTelefone } from "./interfaces/pessoa/numero-pessoa.interface";
import { IPessoa } from "./interfaces/pessoa/pessoa.interface";

type IPessoaOuNumero = IPessoa | INumeroTelefone;
type IPessoaENumero = IPessoa & INumeroTelefone;

//Nessa variavel abaixo, nao deu erro pq usei o | no tipo. 
//Assim devo declarar pelo menos os atributos de um ainterface para dar certo
const logOu: IPessoaOuNumero ={
    // nome: "teste",
    // idade: 32,
    // telefones: [
    //     {
    //         ddd: "11",
    //         numero: 987654
    //     }
    // ],
    ddd: "11",
    numero: 987654
}

//Já nessa variavel não, pois como usei o &, tenho q declarar todos os atributos de todas as interfaces.
const logE: IPessoaOuNumero ={
    nome: "teste",
    idade: 32,
    telefones: [
        {
            ddd: "11",
            numero: 987654
        }
    ],
    ddd: "11",
    numero: 987654
}

console.log(logOu);
console.log(logE);