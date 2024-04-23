import { INumeroTelefone } from "./numero-pessoa.interface";

export interface IPessoa {
    nome: string,
    idade: number,
    sexoMasculino?: boolean
    telefones: INumeroTelefone[],
}