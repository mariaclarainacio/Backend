const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nome: String,
  concluida: Boolean
}, {
  timestamps: true 
});

module.exports = mongoose.model('Tarefa', schema);
