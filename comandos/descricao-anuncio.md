---
name: descricao-anuncio
description: Escreve título e descrição prontos para colar.
skill: redacao-anuncio
agente: criativos
argumentos: "<produto/SKU> <canal>"
---

# /descricao-anuncio

**Uso:** `/descricao-anuncio <produto/SKU> <canal>`

**Executa:** agente [`criativos`](../agentes/criativos.md) com a skill [`redacao-anuncio`](../skills/redacao-anuncio/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `criativos` (arquivo `agentes/criativos.md`). Escreva título e descrição para <produto/SKU> <canal> seguindo a skill `redacao-anuncio`. Na Shopee: texto puro, sem formatação e sem emojis. Entregue em bloco de código.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
