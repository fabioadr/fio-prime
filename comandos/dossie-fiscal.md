---
name: dossie-fiscal
description: Organiza dossiê e perguntas para o contador.
skill: preparacao-fiscal
agente: fiscal-documental
argumentos: "<tema> + documentos disponíveis"
---

# /dossie-fiscal

**Uso:** `/dossie-fiscal <tema> + documentos disponíveis`

**Executa:** agente [`fiscal-documental`](../agentes/fiscal-documental.md) com a skill [`preparacao-fiscal`](../skills/preparacao-fiscal/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `fiscal-documental` (arquivo `agentes/fiscal-documental.md`). Prepare um dossiê sobre <tema> + documentos disponíveis seguindo a skill `preparacao-fiscal`. Não emita parecer; separe fato, relato e hipótese e liste as perguntas ao contador.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
