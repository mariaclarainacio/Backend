const Tarefa = require("./modelo");

async function main() {

let Tarefa = new Tarefa("Estudar");
tarefa.init();
tarefa.inseir();
await tarefa.init();
await tarefa.inseir();

console.log("Tarefa criada com sucesso", tarefa.id, tarefa.nome, tarefa.concluida );

tarefa.nome = "Trabalhar";
tarefa.concluida = true;
tarefa.alterar();
await tarefa.alterar();

console.log("Tarefa alterada com sucesso", tarefa.id, tarefa.nome, tarefa.concluida );

await tarefa.remover();
console.log("Tarefa removida com sucesso", tarefa.id, tarefa.nome, tarefa.concluida );

}

main();