const calcularMediaAluno = require('../src/calcularMediaAluno');

describe("Função calcularMediaAluno", () => {

  test("Deve calcular corretamente com duas notas (a1 e a2)", () => {
    expect(calcularMediaAluno(6, 8)).toBeCloseTo(7.2);
  });

  test("Deve calcular corretamente com três notas, escolhendo a melhor média", () => {
    expect(calcularMediaAluno(7, 5, 9)).toBeCloseTo(
      Math.max(
        7 * 0.4 + 5 * 0.6,
        7 * 0.4 + 9 * 0.6,
        5 * 0.4 + 9 * 0.6
      )
    );
  });

  test("Deve lançar erro se a1 e a2 não forem informadas", () => {
    expect(() => calcularMediaAluno(undefined, undefined)).toThrow(
      "É necessário informar pelo menos duas notas"
    );
  });

  test("Deve lançar erro se a3 for negativa", () => {
    expect(() => calcularMediaAluno(7, 8, -1)).toThrow(
      "Nota a3 não pode ser negativa"
    );
  });

  test("Deve calcular corretamente quando a3 melhora a média", () => {
    expect(calcularMediaAluno(5, 6, 10)).toBeCloseTo(
      Math.max(
        5 * 0.4 + 6 * 0.6,
        5 * 0.4 + 10 * 0.6,
        6 * 0.4 + 10 * 0.6
      )
    );
  });

  test("Deve calcular corretamente quando a3 não melhora a média", () => {
    expect(calcularMediaAluno(9, 8, 5)).toBeCloseTo(
      Math.max(
        9 * 0.4 + 8 * 0.6,
        9 * 0.4 + 5 * 0.6,
        8 * 0.4 + 5 * 0.6
      )
    );
  });

  test("Deve calcular corretamente valores decimais", () => {
    expect(calcularMediaAluno(7.5, 8.2)).toBeCloseTo(7.5 * 0.4 + 8.2 * 0.6);
  });

});