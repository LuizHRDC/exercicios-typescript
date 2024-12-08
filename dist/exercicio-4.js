"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let listaProdutos = [];
function cadastro(nome, preco) {
    const produtoNovo = {
        id: (0, uuid_1.v4)(),
        nome,
        preco
    };
    listaProdutos.push(produtoNovo);
    console.log(`Produto cadastrado: ${nome}, ${preco}`);
}
function listar() {
    if (listaProdutos.length === 0) {
        console.log("Nenhum produto cadastrado");
        return;
    }
    console.log("Lista de produtos cadastrados:\n");
    listaProdutos.forEach((produto) => {
        console.log(`id: ${produto.id} | nome: ${produto.nome} | preço: ${produto.preco} `);
    });
}
function excluir(id) {
    const produtoExcluido = listaProdutos.findIndex((produto) => produto.id === id);
    if (produtoExcluido === -1) {
        console.log(`O produto com id ${id} não pôde ser encontrado.`);
        return;
    }
    const produtoRemovido = listaProdutos.splice(produtoExcluido, 1)[0];
    console.log(`Produto ${produtoRemovido.nome} excluído!`);
}
cadastro("Notebook", 2500);
cadastro("Geladeira", 5000);
listar();
excluir(listaProdutos[1].id);
listar();
