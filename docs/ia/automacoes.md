---
title: "Automações da base: hooks e comandos"
origem: "Pedido do Fábio em 03/11/2026; pesquisa sobre hooks e comandos das ferramentas, 03/11/2026"
atualizado_em: "2026-11-03"
resumo: "Como as cópias de agentes e skills ficam em dia e o critério para adotar novos hooks e comandos."
---

# Automações da base: hooks e comandos

## Configuração, uma vez por clone
```bash
git config core.hooksPath .githooks
node scripts/sync-ia.mjs
```
Requer Git e Node. O Git não ativa hooks sozinho, por segurança: cada pessoa precisa rodar o primeiro comando.

## Três camadas
| Camada | Quando age | O que faz |
| --- | --- | --- |
| Regra em `AGENTS.md` | A LLM alterou `.agents/` | Manda rodar `node scripts/sync-ia.mjs` na hora |
| `pre-commit` | Commit | Bloqueia arquivo sensível; se `.agents/` mudou, valida e refaz as cópias |
| `post-merge`, `post-rewrite`, `post-checkout` | Pull, merge, rebase, troca de branch | Refaz as cópias |

Conferir sem alterar: `node scripts/sync-ia.mjs --check`. Fora do Git, como em chats no navegador, nada disso roda.

## Por que hook do Git
Ele não depende da LLM: vale para qualquer ferramenta ou pessoa que faça commit ou pull. Hooks próprios de cada LLM têm [configuração e eventos diferentes](https://lilting.ch/en/articles/gemini-cli-hooks-research) e só valem naquela ferramenta.

## Comandos
Não há pasta de comandos. Cada ferramenta tem [seu próprio formato](https://catalins.tech/ai-slash-commands/), e as skills em `.agents/skills/` já funcionam como `/nome` nas ferramentas que as leem.

## Critério para adicionar (CRITÉRIO RECOMENDADO)
1. Prefira regra em `AGENTS.md`, skill ou hook do Git.
2. Automação de uma só ferramenta exige benefício alto, sem alternativa agnóstica, e aprovação do responsável.
3. Bloqueie só o que é certamente errado. O resto vira aviso.
