require('dotenv').config(); 
const express = require('express');

const mongoose = require('mongoose'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const produtosRouter = require('./routes/produtosRouter'); 

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
).then(() => console.log('Conectado ao MongoDB Atlas!'))
 .catch(err => console.error('Erro ao conectar:', err));

app.use('/produtos', produtosRouter);
app.use(function(req, res, next) {
  next(createError(404)); 
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;