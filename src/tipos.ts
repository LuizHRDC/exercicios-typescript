//Exercicio 1
export interface Resultado {
    nota: number;
    resultado: boolean;
    mensagem: string;
}

//Exercicio 2
export interface pesoNota {
    peso: number,
    nota: number
}

//Exercicio 3
export interface carteira {
    saldo: number,
    entrada?: number,
    saida?: number
}

//Exercicio 4
export interface produto {
    id: string,
    nome: string,
    preco: number
}

//Exercicio 5
export interface User {
    nome: string
    idade: number
    ocupacao: string
    salario?: number
}

//Exercicio 6
export type diretor = {
    nome: string
    idade: number
    comissao: number
    salario?: number
}

//Exercicio 7
export type UserOuDiretor = User | diretor