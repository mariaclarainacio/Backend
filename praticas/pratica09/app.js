const express = require('express');
const apidocsRouter = require('./routes/apidocsRouter');

const app = express();

app.use(express.json());

app.use('/api-docs', apidocsRouter);

module.exports = app;