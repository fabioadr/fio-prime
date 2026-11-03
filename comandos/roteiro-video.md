---
name: roteiro-video
description: Cria roteiro de vídeo curto de produto.
skill: roteiro-video-produto
agente: criativos
argumentos: "<produto/SKU> <canal> <duração>"
---

# /roteiro-video

**Uso:** `/roteiro-video <produto/SKU> <canal> <duração>`

**Executa:** agente [`criativos`](../agentes/criativos.md) com a skill [`roteiro-video-produto`](../skills/roteiro-video-produto/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `criativos` (arquivo `agentes/criativos.md`). Crie um roteiro para <produto/SKU> <canal> <duração> seguindo a skill `roteiro-video-produto`, em tabela tempo | cena | texto na tela | fala.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
