"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function infoUser({ nome, idade, ocupacao, salario }) {
    if (nome && idade && ocupacao) {
        console.log(`${nome}, ${idade} anos, ${ocupacao}, ${salario ? salario : 'N/A'}`);
    }
    else {
        console.log('Nome, idade e ocupação são obrigatórios');
    }
}
const usuario = {
    nome: 'Daphne',
    ocupacao: "Analista de TI",
    idade: 23
};
const usuario2 = {
    nome: 'Luiz',
    idade: 24,
    ocupacao: 'Desenvolvedor',
    salario: 8500
};
infoUser(usuario);
infoUser(usuario2);
