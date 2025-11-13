require('dotenv').config();
const express = require('express');

const usuariosRouter = require('./routes/usuariosRouter');
const produtosRouter = require('./routes/produtosRouter');

const app = express();

app.use(express.json());

app.use('/usuarios', usuariosRouter);
app.use('/produtos', produtosRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Not Found' });
});

module.exports = app;