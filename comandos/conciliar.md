---
name: conciliar
description: Concilia uma venda/devolução/repasse de marketplace.
skill: conciliacao-marketplace
agente: operacoes
argumentos: "<canal> <pedido> + extrato/movimentações"
---

# /conciliar

**Uso:** `/conciliar <canal> <pedido> + extrato/movimentações`

**Executa:** agente [`operacoes`](../agentes/operacoes.md) com a skill [`conciliacao-marketplace`](../skills/conciliacao-marketplace/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `operacoes` (arquivo `agentes/operacoes.md`). Concilie <canal> <pedido> + extrato/movimentações seguindo a skill `conciliacao-marketplace`: linha do tempo, tabela de lançamentos, líquido esperado x registrado e conclusão.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
