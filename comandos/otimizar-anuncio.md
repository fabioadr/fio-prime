---
name: otimizar-anuncio
description: Audita uma página/anúncio e propõe melhorias e teste.
skill: otimizacao-anuncio
agente: criativos
argumentos: "<link, print ou texto do anúncio> [canal]"
---

# /otimizar-anuncio

**Uso:** `/otimizar-anuncio <link, print ou texto do anúncio> [canal]`

**Executa:** agente [`criativos`](../agentes/criativos.md) com a skill [`otimizacao-anuncio`](../skills/otimizacao-anuncio/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `criativos` (arquivo `agentes/criativos.md`). Audite o anúncio <link, print ou texto do anúncio> [canal] seguindo a skill `otimizacao-anuncio`. Entregue o diagnóstico priorizado, os textos reescritos (só com atributos da ficha do SKU) e um teste com uma variável.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
