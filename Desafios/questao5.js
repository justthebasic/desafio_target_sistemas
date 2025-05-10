// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
  let stringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  console.log(`\n5) String original: "${str}"`);
  console.log(`   String invertida: "${stringInvertida}"`); // Para "exemplo", resultado esperado: "olpmexe"
  return stringInvertida;
}

inverterString("target");
inverterString("desafio tecnico");