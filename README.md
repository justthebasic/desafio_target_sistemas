# Desafio Técnico - Target Sistemas

Resolução do desafio técnico para a vaga de Desenvolvedor de Sistemas Jr. na Target Sistemas, abordando problemas de lógica, manipulação de dados e leitura de arquivos.

## Questões Resolvidas

1. Cálculo de soma em loop (Questão 1).
2. Verificação de sequência de Fibonacci (Questão 2).
3. Análise de faturamento diário a partir de JSON/XML (Questão 3).
4. Percentual de faturamento por estado (Questão 4).
5. Inversão de string sem funções nativas (Questão 5).

## Como Executar

1. **Pré-requisitos**:
   - Node.js (v14 ou superior).
   - Dependência: `xml2js` (instale com `npm install xml2js`).

2. **Arquivos de Dados** (Questão 3):
   - Coloque `dados.json` e/ou `dados.xml` no mesmo diretório do script da Questão 3.

3. **Execução**:
   - Execute cada questão separadamente ou ajuste para um arquivo principal.
   - Para Questão 3 (exemplo): `node questao3.mjs` (certifique-se de usar ES Modules com `"type": "module"` no `package.json` ou extensão `.mjs`).

## Resultados Esperados

- **Questão 1**: Soma = 91.
- **Questão 2**: Indica se o número pertence à sequência de Fibonacci.
- **Questão 3**: Menor (R$ 373.78), Maior (R$ 48924.24), Dias acima da média (10).
- **Questão 4**: Percentuais (SP: 37.53%, RJ: 20.29%, MG: 16.17%, ES: 15.03%, Outros: 10.98%).
- **Questão 5**: String invertida (ex.: "target" → "tegrat").

## Nota

Código desenvolvido para o desafio técnico. Execute cada arquivo individualmente ou adapte conforme necessário.
