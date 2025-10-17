
const tarefa = new Tarefa("Estudar", false);
tarefa.inserir()

tarefa.nome = "trabalhar";
tarefa.concluida = true;
tarefa.alterar();

class Tarefa {
     db = conectaDb().then().catch();
     collection = null

    inserir() {
      const resultado = collecion.insertOne(nome, conluida)
      this.id = resultado._id
    }

    alterar() {

    }
}


const tarefa = new Tarefa("Estudar");

tarefa.nome?
tarefa.concluida?
tarefa.id?

tarefa.buscar()
this.nome = resultado.nome
this.conluida = resultado.concluida
this.id = resultado.
