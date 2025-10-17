require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const tarefasRouter = require('./routes/tarefasRouter');

const MONGO_PASSWORD = "2212Moon"; 
const url = `mongodb+srv://MariaClara:${MONGO_PASSWORD}@cluster0.h0c8te1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar com MongoDB", err.message));

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/tarefas', tarefasRouter);

module.exports = app;
