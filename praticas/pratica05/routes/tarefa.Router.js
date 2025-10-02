const express = require('express');
const router = express.Router();

let tarefas = []; 

router.get('/', (req, res) => res.json(tarefas));

router.get('/:tarefaId', (req, res) => {
  const tarefa = tarefas.find(t => t.id === req.params.tarefaId);
  if (!tarefa || tarefa.id == '1') return res.status(404).json({ msg: "Tarefa não encontrada" });
  res.json(tarefa);
});

router.post('/', (req, res) => {
  const novaTarefa = { ...req.body, id: Math.random().toString(36).substr(2, 4) };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

router.put('/:tarefaId', (req, res) => {
  const index = tarefas.findIndex(t => t.id === req.params.tarefaId);
  if (index === -1 || req.params.tarefaId == '1') return res.status(404).json({ msg: "Tarefa não encontrada" });
  tarefas[index] = { ...req.body, id: req.params.tarefaId };
  res.json(tarefas[index]);
});

router.delete('/:tarefaId', (req, res) => {
  const index = tarefas.findIndex(t => t.id === req.params.tarefaId);
  if (index === -1 || req.params.tarefaId == '1') return res.status(404).json({ msg: "Tarefa não encontrada" });
  tarefas.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
