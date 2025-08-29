function soma(a,b){
    return a + b;
}

function subitracao(a,b){
    return a - b;
}

module.exports = { soma,subitracao };

function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a,b){
    if (b === 0) throw Error("Divisao por ZERO");
    return a / b;
  }
  module.exports = { soma, subitracao, multiplicacao, divisao };