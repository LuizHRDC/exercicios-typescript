import {Resultado} from "./tipos"

let n1: number = 7;
let n2: number = 9;

function validaNota(n1: number, n2: number): Resultado {
    const media: number = (n1+n2)/2
    return {
        nota: media,
        resultado: media >= 6,
        mensagem: media >= 6 ? "Aprovado" : "Reprovado"
    };
}

console.log(validaNota(n1, n2))