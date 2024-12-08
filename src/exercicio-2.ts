import {pesoNota} from "./tipos"

function calcMediaPond(lista: pesoNota[]): number {
    let somaNotasPesadas = 0;
    let somaPeso = 0;

    for (const item of lista) {
        somaNotasPesadas += item.nota * item.peso;
        somaPeso += item.peso 
    }

    return parseFloat((somaNotasPesadas / somaPeso).toFixed(2));
}

const lista1: pesoNota[] = [
    { nota: 7, peso: 2 },
    { nota: 9, peso: 3 },
  ];
const resultado1 = calcMediaPond(lista1);
console.log(`Média ponderada 1: ${resultado1}`);

const lista2: pesoNota[] = [
    { nota: 5, peso: 1 },
    { nota: 9, peso: 2 },
    { nota: 8, peso: 3 },
  ];
  const resultado2 = calcMediaPond(lista2);
  console.log(`Média ponderada 2: ${resultado2}`);