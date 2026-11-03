---
name: revisar
description: Revisa uma entrega antes de enviar.
skill: revisao-final
agente: curador-base
argumentos: "<entrega ou referência à resposta anterior>"
---

# /revisar

**Uso:** `/revisar <entrega ou referência à resposta anterior>`

**Executa:** agente [`curador-base`](../agentes/curador-base.md) com a skill [`revisao-final`](../skills/revisao-final/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `curador-base` (arquivo `agentes/curador-base.md`). Revise <entrega ou referência à resposta anterior> com a skill `revisao-final` e liste problemas e correções, ou aprove com ressalvas.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
