const model = require("../models/tarefaModel");

const listarTarefas = (req, res) => {
  const tarefas = model.listar();
  res.json(tarefas);
};

const criarTarefa = (req, res) => {
  const novaTarefa = model.criar(req.body);
  res.status(201).json(novaTarefa);
};


const pesquisarId = (req, res, next) => {
  const { id } = req.params;
  const tarefaEncontrada = model.pesquisarId(id);
  if (tarefaEncontrada) {
    req.tarefa = tarefaEncontrada;
    return next();
  }
  res.status(404).json({ msg: "Tarefa não encontrada" });
};

const exibirTarefa = (req, res) => {
  res.json(req.tarefa);
};

const alterarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefaAlterada = model.alterar({ id, ...req.body });
  if (tarefaAlterada) {
    return res.json(tarefaAlterada);
  }
  res.status(404).json({ msg: "Tarefa não encontrada" });
};

const apagarTarefa = (req, res) => {
  const { id } = req.params;
  const posicao = model.excluir(id);
  if (posicao >= 0) {
    return res.status(204).end();
  }
  res.status(404).json({ msg: "Tarefa não encontrada" });
};

module.exports = {
  listarTarefas,
  criarTarefa,
  pesquisarId,
  exibirTarefa,
  alterarTarefa,
  apagarTarefa,
};