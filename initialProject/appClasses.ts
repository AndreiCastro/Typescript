import { Cliente } from "./models/cliente/cliente.model.js";
import { Endereco } from "./models/cliente/endereco.model.js";
import { Telefone } from "./models/cliente/telefone.model.js";

let cliente: Cliente = new Cliente('Andrei', 32, [new Telefone('11', 12345678)], new Endereco('Teste', '458'));

cliente.falar();
cliente.mostrarTelefone();


// Sempre que tiver função utilize class, mas se for soemnte com propriedades usar uma interface