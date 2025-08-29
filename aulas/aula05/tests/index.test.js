const calculadora = require('../src/index.js');

test("2 + 2 = 4",() => {
  expect(calculadora.soma).toBeDefined();
  expect(calculadora.soma(2,2)).toBe(4);
})

test("2 + 0 = 2", () => {
 expect(calculadora.soma(2,0)).toBe(2);
})

test("-2 + -2 = -4", () =>{
  expect(calculadora.soma(-2, -2)).toBe(-4);
})

test("se a >= b entao a - b >= 0", function(){
  expect(calculadora.subitracao).toBeDefined();
  expect(calculadora.subitracao(2,1)).toBeGreaterThanOrEqual(0);
  expect(calculadora.subitracao(2,2)).toBeGreaterThanOrEqual(0);
  expect(calculadora.subitracao(2,-2)).toBeGreaterThanOrEqual(0);
  expect(calculadora.subitracao(-2,-4)).toBeGreaterThanOrEqual(0);
})

test("se a >= b entao a - b >= 0", function(){
  expect(calculadora.subitracao(1,2)).toBeLessThan(0);
  expect(calculadora.subitracao(-2,-1)).toBeLessThan(0);
  expect(calculadora.subitracao(-2,1)).toBeLessThan(0);
})

test('se a * b então 2 * 3 = 6', function () {
  expect(calculadora.multiplicacao(2, 3)).toBe(6);
});

test('se a * b então 0 * 5 = 0', function () {
  expect(calculadora.multiplicacao(0, 5)).toBe(0);
});

test('se a * b então -2 * 4 = -8', function () {
  expect(calculadora.multiplicacao(-2, 4)).toBe(-8);
});

test("se b = 0 entao Divisao por ZERO", () => {
  expect(calculadora.divisao).toBeDefined();
  expect(() => calculadora.divisao(2,0)).toThrow("Divisao por ZERO");
})

