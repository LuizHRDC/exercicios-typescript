import { carteira } from "./tipos";

let carteira: carteira = {
    saldo: 100,
    entrada: 50,
    saida: 25
}

function atualizaSaldo(carteira: carteira): void {
    if (!carteira.entrada && !carteira.saida) {
        console.log(`Saldo: ${carteira.saldo}`)
    }
    if (carteira.entrada) {
        carteira.saldo += carteira.entrada
        console.log(`Entrada de ${carteira.entrada}\nSaldo atual: ${carteira.saldo}`)
    }
    if (carteira.saida) {
        if (carteira.saldo >= carteira.saida) {
            carteira.saldo -= carteira.saida
            console.log(`Saída: ${carteira.saida}\nSaldo atual: ${carteira.saldo}`)
        } else {
            console.log("Saldo insuficiente.") 
        }
    } 
}

atualizaSaldo(carteira)