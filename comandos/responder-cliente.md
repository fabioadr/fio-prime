---
name: responder-cliente
description: Responde um comprador como Ana da Fio Prime.
skill: atendimento-cliente
agente: atendimento-ana
argumentos: "<canal> + mensagem do cliente [+ pedido/produto]"
---

# /responder-cliente

**Uso:** `/responder-cliente <canal> + mensagem do cliente [+ pedido/produto]`

**Executa:** agente [`atendimento-ana`](../agentes/atendimento-ana.md) com a skill [`atendimento-cliente`](../skills/atendimento-cliente/SKILL.md).

## Prompt equivalente
Para ferramentas que não reconhecem `/comandos`, cole o texto abaixo trocando o trecho entre `< >`:

> Atue como o agente `atendimento-ana` (arquivo `agentes/atendimento-ana.md`). Responda como Ana da Fio Prime à mensagem a seguir, seguindo a skill `atendimento-cliente`: <canal> + mensagem do cliente [+ pedido/produto]. Entregue a mensagem pronta e, separado, o que precisa ser confirmado internamente.

Se faltarem entradas essenciais, peça só o mínimo indispensável. Antes de entregar, aplique a skill `revisao-final`.
