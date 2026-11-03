---
name: plano-giro
description: Planeja o giro de estoque parado sem prejuízo.
skill: giro-estoque-lento
agente: estrategista-comercial
argumentos: "<SKU(s)> [estoque atual, custo, preço]"
---

# /plano-giro

**Uso:** `/plano-giro <SKU(s)> [estoque atual, custo, preço]`

**Executa:** agente [`estrategista-comercial`](../agentes/estrategista-comercial.md) com a skill [`giro-estoque-lento`](../skills/giro-estoque-lento/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `estrategista-comercial` (arquivo `agentes/estrategista-comercial.md`). Monte um plano de giro para <SKU(s)> [estoque atual, custo, preço] seguindo a skill `giro-estoque-lento`, com o piso de margem, as ações por ordem de custo, o risco para os campeões e o critério de parada.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
