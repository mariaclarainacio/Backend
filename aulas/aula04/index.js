function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a + b * -1;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) return undefined;
  return a / b;
}

export { soma, subtracao, multiplicacao, divisao };
