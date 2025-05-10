// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
// pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;




function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  let pertence = false;

  if (numero === a || numero === b) {
    pertence = true;
  } else {
    while (b < numero) {
      let temp = b;
      b = a + b;
      a = temp;
      if (b === numero) {
        pertence = true;
        break;
      }
    }
  }

  if (pertence) {
    console.log(`2) O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`2) O número ${numero} NÃO pertence à sequência de Fibonacci.`);
  }
  return pertence;
}

verificaFibonacci(13);
verificaFibonacci(14); 
verificaFibonacci(0);  
verificaFibonacci(1);  