---
name: registrar
description: Registra fato, decisão ou experimento na base.
skill: registro-conhecimento
agente: curador-base
argumentos: "<o que registrar> [fonte e data]"
---

# /registrar

**Uso:** `/registrar <o que registrar> [fonte e data]`

**Executa:** agente [`curador-base`](../agentes/curador-base.md) com a skill [`registro-conhecimento`](../skills/registro-conhecimento/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `curador-base` (arquivo `agentes/curador-base.md`). Registre na base: <o que registrar> [fonte e data]. Siga a skill `registro-conhecimento`: classifique o status, escolha o arquivo, preserve o histórico e mostre o trecho para aprovação antes de gravar ou commitar.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
