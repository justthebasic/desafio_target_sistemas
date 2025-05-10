// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado
// teve dentro do valor total mensal da distribuidora.

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentualRepresentacao(faturamentoEstados) {
  const totalMensal = Object.values(faturamentoEstados).reduce(
    (acc, valor) => acc + valor,
    0
  );
  const percentuais = {};

  console.log("\n4) Percentual de Representação por Estado:");
  for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / totalMensal) * 100;
    percentuais[estado] = percentual.toFixed(2) + "%";
    console.log(`   - ${estado}: ${percentuais[estado]}`);
  }
 
  return percentuais;
}

calcularPercentualRepresentacao(faturamentoPorEstado);