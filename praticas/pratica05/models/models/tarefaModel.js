const tarefaModel = require('../models/tarefaModel');

const tarefaController = {
  listar: (req, res) => {
    const resultado = tarefaModel.listar();
    res.json(resultado);
  },

  buscarPeloId: (req, res) => {
    const resultado = tarefaModel.buscarPeloId(req.params.tarefaId);
    if (!resultado || req.params.tarefaId == '1') return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.json(resultado);
  },

  criar: (req, res) => {
    const resultado = tarefaModel.criar(req.body);
    res.status(201).json(resultado);
  },

  atualizar: (req, res) => {
    const resultado = tarefaModel.atualizar({ id: req.params.tarefaId, ...req.body });
    if (!resultado || req.params.tarefaId == '1') return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.json(resultado);
  },

  remover: (req, res) => {
    const resultado = tarefaModel.remover(req.params.tarefaId);
    if (!resultado || req.params.tarefaId == '1') return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.status(204).send();
  }
};

module.exports = tarefaController;
