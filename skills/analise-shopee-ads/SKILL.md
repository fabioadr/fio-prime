---
name: analise-shopee-ads
description: Diagnostica e otimiza campanhas de Shopee Ads da Fio Prime com foco em lucro de contribuição após mídia, separando os dias em que o anúncio ficou pausado por falta de estoque. Use quando houver relatórios ou prints de Shopee Ads ou perguntas sobre ROAS, ACoS, TACoS, CTR, CPC, conversão, anúncio ruim, pausar/escalar campanha ou ajustar lance.
metadata:
  versao: "1.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Análise de Shopee Ads

> Caminhos são relativos à raiz do repositório.

## Leia antes
- `canais/shopee-ads.md` — métricas (§5.2), dados mínimos (§5.3), estados de veiculação (§5.4), árvore de causas (§5.5), roteiro das meias masculinas Hoahi (§5.7).
- `catalogo/precificacao-e-portfolio.md` — modelo de margem unitária.
- `operacao/estoque-bling.md` — ruptura e estoque por variação.
- Se o anúncio for de um SKU específico: a ficha em `catalogo/produtos.md`.

## Entradas
- **Mínimo:** relatório por anúncio com período, impressões, cliques, gasto, pedidos e receita atribuída.
- **Ideal:** dados diários, estoque por variação com datas de ruptura e reativação, vendas totais (inclusive orgânicas), custo variável por kit e histórico de alterações no anúncio.
- Se faltar algo, faça o possível com o que existe e liste o que falta e por quê. Peça só o indispensável.

## Passos
1. **Validar os dados:** período, IDs, kit x unidade, pedidos x unidades, janela de atribuição.
2. **Classificar cada dia × anúncio** conforme §5.4: ativo com estoque adequado / ativo com estoque parcial / pausado por estoque / pausado por decisão / sem dados. Compare eficiência só nos dias elegíveis.
3. **Calcular** CTR, CPC, CVR, CPA, ROAS, ACoS e, se houver vendas totais, TACoS. Use as fórmulas da base; divisão por zero = indefinido, não zero.
4. **Economia do SKU:** margem pré-Ads → ROAS de equilíbrio (`1 ÷ margem`) e ROAS-alvo. Sem custos reais, monte cenários marcados como **HIPOTÉTICO** e não recomende aumentar gasto.
5. **Diagnosticar** com a árvore de causas. Para cada problema: sintoma, hipótese, evidência e explicação alternativa.
6. **Priorizar** pelo impacto econômico estimado × confiança (tamanho da amostra).
7. **Planejar testes:** uma hipótese por teste, métrica-alvo, janela, critério de sucesso e critério de parada. Use o modelo de experimento em `historico/decisoes.md`.
8. **Registrar o que for aprovado:** decisões e experimentos em `historico/decisoes.md` (skill `registro-conhecimento`).

## Saída
1. Resumo executivo (escopo, período, data dos dados).
2. Tabela por anúncio: gasto, receita atribuída, pedidos, ROAS, ACoS, CTR, CPC, CVR, margem (se conhecida) e estado de estoque.
3. Problemas priorizados (alta/média/baixa) com hipótese e evidência.
4. Plano de testes.
5. Lacunas de dados.

## Não faça
- Tratar ausência de dados ou pausa por ruptura como desempenho ruim.
- Confundir ROAS alto com lucro.
- Prescrever pausa definitiva ou lance específico sem amostra mínima e margem conhecida.
- Comparar kit de 3 pares com unidade avulsa como se fossem a mesma oferta.
- Citar concorrentes ou taxas atuais sem pesquisa autorizada e datada.
