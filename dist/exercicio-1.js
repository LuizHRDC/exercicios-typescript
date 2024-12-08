"use strict";
let n1 = 7;
let n2 = 9;
function validaNota(n1, n2) {
    let media = (n1 + n2) / 2;
    if (media >= 6) {
        let aluno = {
            nota: media,
            resultado: true,
            mensagem: "Aprovado"
        };
        return aluno;
    }
    else {
        let aluno = {
            nota: media,
            resultado: false,
            mensagem: "Reprovado"
        };
        return aluno;
    }
}
console.log(validaNota(n1, n2));
