"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcMediaPond(lista) {
    let somaNotasPesadas = 0;
    let somaPeso = 0;
    for (const item of lista) {
        somaNotasPesadas += item.nota * item.peso;
        somaPeso += item.peso;
    }
    return parseFloat((somaNotasPesadas / somaPeso).toFixed(2));
}
const lista1 = [
    { nota: 7, peso: 2 },
    { nota: 9, peso: 3 },
];
const resultado1 = calcMediaPond(lista1);
console.log(`Média ponderada 1: ${resultado1}`);
const lista2 = [
    { nota: 5, peso: 1 },
    { nota: 9, peso: 2 },
    { nota: 8, peso: 3 },
];
const resultado2 = calcMediaPond(lista2);
console.log(`Média ponderada 2: ${resultado2}`);
