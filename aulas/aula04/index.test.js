import {soma, subtracao, multiplicacao, divisao} from "./index.js"

console.log("Teste da função soma()");
if (soma(2, 2) === 4) console.log("Passou o 1º!");
else console.log("Falhou 1º!");
if (soma(-1, 2) === 1) console.log("Passou o 2º!");
else console.log("Falhou 2º!");
if (soma(2, 0) === 2) console.log("Passou o 3º!");
else console.log("Falhou 3º!");


console.log("Teste da função subtracao()");
if (subtracao(5, 2) === 3) console.log("Passou o 1º!");
else console.log("Falhou 1º!");
if (subtracao(10, 10) === 0) console.log("Passou o 2º!");
else console.log("Falhou 2º!");
if (subtracao(0, 7) === -7) console.log("Passou o 3º!");
else console.log("Falhou 3º!");


console.log("Teste da função multiplicacao()");
if (multiplicacao(3, 2) === 6) console.log("Passou o 1º!");
else console.log("Falhou 1º!");
if (multiplicacao(5, 0) === 0) console.log("Passou o 2º!");
else console.log("Falhou 2º!");
if (multiplicacao(-4, 2) === -8) console.log("Passou o 3º!");
else console.log("Falhou 3º!");


console.log("Teste da função divisao()");
if (divisao(10, 2) === 5) console.log("Passou o 1º!");
else console.log("Falhou 1º!");
if (divisao(9, 3) === 3) console.log("Passou o 2º!");
else console.log("Falhou 2º!");
if (divisao(7, 2) === 3.5) console.log("Passou o 3º!");
else console.log("Falhou 3º!");

