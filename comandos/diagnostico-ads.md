---
name: diagnostico-ads
description: Diagnostica anúncios de Shopee Ads com foco em lucro após mídia.
skill: analise-shopee-ads
agente: estrategista-comercial
argumentos: "<anúncio(s) ou período> + exportação/print do relatório"
---

# /diagnostico-ads

**Uso:** `/diagnostico-ads <anúncio(s) ou período> + exportação/print do relatório`

**Executa:** agente [`estrategista-comercial`](../agentes/estrategista-comercial.md) com a skill [`analise-shopee-ads`](../skills/analise-shopee-ads/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `estrategista-comercial` (arquivo `agentes/estrategista-comercial.md`). Analise o desempenho de <anúncio(s) ou período> + exportação/print do relatório em Shopee Ads seguindo a skill `analise-shopee-ads`. Separe os dias pausados por estoque, calcule as métricas, avalie a margem (ou cenários hipotéticos) e entregue um diagnóstico priorizado, um plano de testes e as lacunas de dados.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
