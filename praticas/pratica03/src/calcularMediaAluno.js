function calcularMediaAluno(a1, a2, a3) {
    if (a1 === undefined || a2 === undefined) {
      throw new Error("É necessário informar pelo menos duas notas");
    }
  
    if (a3 === undefined) {
      return a1 * 0.4 + a2 * 0.6;
    }
  
    if (a3 < 0) {
      throw new Error("Nota a3 não pode ser negativa");
    }
  
    return Math.max(
      a1 * 0.4 + a2 * 0.6,
      a1 * 0.4 + a3 * 0.6,
      a2 * 0.4 + a3 * 0.6
    );
  }
  
  module.exports = calcularMediaAluno;