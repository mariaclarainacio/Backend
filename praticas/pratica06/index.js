const readline = require('readline-sync');
const controlador = require('./controlador');

function menu() {
  console.log('\n1 - Adicionar tarefa');
  console.log('2 - Buscar tarefa');
  console.log('3 - Atualizar tarefa');
  console.log('4 - Remover tarefa');
  console.log('5 - Sair');
}

async function escolherOpcao(opcao) {
  switch (opcao) {
    case '1':
      const nomeAdd = readline.question('Nome da tarefa: ');
      await controlador.adicionarTarefa(nomeAdd);
      break;
    case '2':
      const nomeBuscar = readline.question('Nome da tarefa: ');
      await controlador.buscarTarefa(nomeBuscar);
      break;
    case '3':
      const nomeAtualizar = readline.question('Nome da tarefa: ');
      const concluida = readline.question('Concluída (true/false): ');
      await controlador.atualizarTarefa(nomeAtualizar, concluida);
      break;
    case '4':
      const nomeRemover = readline.question('Nome da tarefa: ');
      await controlador.removerTarefa(nomeRemover);
      break;
    case '5':
      console.log('Saindo...');
      process.exit();
  }
}

async function main() {
  while (true) {
    menu();
    const opcao = readline.question('Escolha uma opção: ');
    await escolherOpcao(opcao);
  }
}

main();
