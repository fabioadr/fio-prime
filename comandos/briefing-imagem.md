---
name: briefing-imagem
description: Gera briefing/prompt de imagem fiel ao produto, ou revisa uma imagem.
skill: briefing-imagem-produto
agente: criativos
argumentos: "<produto/SKU> <objetivo/canal> [imagem original]"
---

# /briefing-imagem

**Uso:** `/briefing-imagem <produto/SKU> <objetivo/canal> [imagem original]`

**Executa:** agente [`criativos`](../agentes/criativos.md) com a skill [`briefing-imagem-produto`](../skills/briefing-imagem-produto/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `criativos` (arquivo `agentes/criativos.md`). Crie o briefing (ou revise a imagem) de <produto/SKU> <objetivo/canal> [imagem original] seguindo a skill `briefing-imagem-produto`. Inclua as restrições do que não pode mudar e o checklist de aceite.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
