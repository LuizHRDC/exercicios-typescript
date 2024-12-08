"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function infoFuncionario({ nome, idade, salario, comissao }) {
    if (nome && idade && comissao) {
        console.log(`Diretor(a) ${nome}, ${idade} anos, comissão de nível ${comissao}, salário ${salario ? salario : 'N/A'}`);
    }
    else {
        console.log('Nome, idade e nível de comissão são obrigatórios!');
    }
}
const funcionario1 = {
    nome: 'Luiz',
    idade: 24,
    comissao: 5,
    salario: 30000
};
const funcionario2 = {
    nome: 'Amanda',
    idade: 35,
    comissao: 5
};
infoFuncionario(funcionario1);
infoFuncionario(funcionario2);
