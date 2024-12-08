import { User } from './tipos'
import { diretor } from './tipos'
import { UserOuDiretor } from './tipos'

const usuario1: User = {
    nome: 'Felipe',
    idade: 36,
    ocupacao: 'Engenheiro de dados',
    salario: 12000
}

const usuario2: User = {
    nome: 'Milena',
    idade: 32,
    ocupacao: 'Cientista de dados'
}

const funcionario1: diretor = {
    nome: 'Oliver',
    idade: 55,
    comissao: 5,
    salario: 19000
}

const funcionario2: diretor = {
    nome: 'Aline',
    idade: 40,
    comissao: 5, 
}

const lista: UserOuDiretor[] = [usuario1, usuario2, funcionario1, funcionario2]


function verificaUserOuDiretor(lista: UserOuDiretor[]): void {
    for (const item of lista) {
        if ("comissao" in item) {
            console.log(`Diretor(a) ${item.nome}, ${item.idade} anos, comissão de nível ${item.comissao}, salário: ${item.salario || 'N/A'}`)
        } else {
            console.log(`User ${item.nome}, ${item.idade} anos, ${item.ocupacao}, ${item.salario || 'N/A'}`)
        }
    }
}

verificaUserOuDiretor(lista)