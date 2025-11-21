require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const usuariosRouter = require('./routes/usuariosRouter');
const apidocsRouter = require('./routes/apidocs.Router');

const app = express();

app.use(express.json());

const host = process.env.MONGODB_HOST;
const db   = process.env.MONGODB_DATABASE;

const uri = `mongodb://${host}/${db}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err));

app.use('/api-docs', apidocsRouter);
app.use('/usuarios', usuariosRouter);

app.use((req, res) => res.status(404).json({ msg: 'Rota não encontrada' }));

module.exports = app;