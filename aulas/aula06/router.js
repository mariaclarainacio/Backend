// 1. importar o framework
const express = require("express");

// middleware de roteamento
const router = express.Router();

// rota GET -> listar tarefas
router.get('/', (req, res) => {
  res.send("Listar as tarefas");
});

// rota POST -> criar tarefa
router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send("Tarefa criada com sucesso");
});

// rota PUT -> atualizar tarefa
router.put('/:id', (req, res) => {
  const { id } = req.params; // desestruturando o objeto params
  if (id == 1) return res.send("Tarefa atualizada");
  res.status(404).send("Tarefa não encontrada");
});

// rota DELETE -> excluir tarefa
router.delete('/:id', (req, res) => {
  const { id } = req.params; // desestruturando o objeto params
  if (id == 1) return res.status(204).end(); // sem conteúdo
  res.status(404).send("Tarefa não encontrada");
});

module.exports = router;