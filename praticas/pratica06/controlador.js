const { Tarefa } = require('./modelo');

async function adicionarTarefa(nome) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.inserir();
  console.log('Tarefa adicionada com sucesso!');
}

async function buscarTarefa(nome) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.buscar();
  console.log(tarefa);
  return tarefa;
}

async function atualizarTarefa(nome, concluida) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.buscar();
  if (tarefa.id) {
    tarefa.concluida = concluida === 'true';
    await tarefa.alterar();
    console.log('Tarefa atualizada!');
  } else {
    console.log('Tarefa não encontrada!');
  }
}

async function removerTarefa(nome) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.buscar();
  if (tarefa.id) {
    await tarefa.deletar();
    console.log('Tarefa removida!');
  } else {
    console.log('Tarefa não encontrada!');
  }
}

module.exports = {
  adicionarTarefa,
  buscarTarefa,
  atualizarTarefa,
  removerTarefa
};
