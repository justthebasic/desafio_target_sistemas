// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa,
// na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Dados do faturamento diário (conforme JSON fornecido anteriormente)


import { readFileSync } from 'fs';
import { Parser } from 'xml2js';

async function carregarDados(caminhoJson = 'dados.json', caminhoXml = 'dados.xml') {
  try {
    const dadosRaw = readFileSync(caminhoJson, 'utf8');
    return JSON.parse(dadosRaw);
  } catch {
    try {
      const dadosRaw = readFileSync(caminhoXml, 'utf8');
      const parser = new Parser();
      const resultado = await parser.parseStringPromise(dadosRaw);
      if (resultado.faturamentoMensal && resultado.faturamentoMensal.item) {
        return resultado.faturamentoMensal.item.map(entry => ({
          dia: parseInt(entry.dia[0], 10),
          valor: parseFloat(entry.valor[0])
        }));
      }
    } catch {
      console.log("Erro ao carregar dados de JSON ou XML.");
      return null;
    }
  }
  return null;
}

function analisarFaturamento(dados) {
  const validos = dados.filter(d => d.valor > 0).map(d => d.valor);
  if (validos.length === 0) {
    console.log("3) Sem dados de faturamento válidos.");
    return;
  }

  const menor = Math.min(...validos);
  const maior = Math.max(...validos);
  const media = validos.reduce((acc, v) => acc + v, 0) / validos.length;
  const diasAcima = validos.filter(v => v > media).length;

  console.log("3) Análise do Faturamento:");
  console.log(`   - Menor: R$ ${menor.toFixed(2)}`);
  console.log(`   - Maior: R$ ${maior.toFixed(2)}`);
  console.log(`   - Média: R$ ${media.toFixed(2)}`);
  console.log(`   - Dias acima da média: ${diasAcima}`);
}

async function executarAnalise() {
  const dados = await carregarDados();
  if (dados) analisarFaturamento(dados);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  executarAnalise();
}