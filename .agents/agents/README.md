# .agents/agents/

Definições de subagentes da Fio Prime. Um subagente recebe uma tarefa delimitada, trabalha em contexto próprio e devolve só o resultado ao agente principal.

**Padrão:** ainda não há padrão aberto único para subagentes. O formato comum é Markdown com `name` e `description`, mas cada ferramenta lê um caminho. Esta pasta é a **fonte única** (convenção da Fio Prime no espaço `.agents/`), e `node scripts/sync-agents.mjs` gera as cópias locais, ignoradas pelo git. Pesquisa de 03/11/2026: <https://www.morphllm.com/subagent>; confira a versão da sua ferramenta.

| Ferramenta | Cópia gerada |
| --- | --- |
| Claude Code | `.claude/agents/<nome>.md` |
| Cursor | Lê `.claude/agents/` e `.codex/agents/` |
| Codex | `.codex/agents/<nome>.toml` |
| Gemini CLI | `.gemini/agents/<nome>.md` |
| GitHub Copilot e VS Code | `.github/agents/<nome>.agent.md` |
| Chat sem subagente | Modo sequencial (abaixo) |

## Agentes
| Agente | Quando acionar | Escrita |
| --- | --- | --- |
| [`pesquisador-marketplace`](pesquisador-marketplace.md) | Termos de busca, regras e concorrentes | Não |
| [`redator-anuncio`](redator-anuncio.md) | Título e descrição | Não |
| [`revisor-anuncio`](revisor-anuncio.md) | Revisão independente do texto | Não |
| [`diretor-criativo`](diretor-criativo.md) | Imagem e vídeo | Não |
| [`estrategista-comercial`](estrategista-comercial.md) | Ads, preço, margem e giro | Arquivos de trabalho |
| [`atendimento-ana`](atendimento-ana.md) | Mensagens a compradores | Não |
| [`operacoes`](operacoes.md) | Estoque, Bling, cadastro e conciliação | Arquivos de trabalho |
| [`fiscal-documental`](fiscal-documental.md) | Dossiê para o contador | Não |
| [`curador-base`](curador-base.md) | Registrar conhecimento na base | Sim, sem commit |

**Fluxo de anúncio:** `pesquisador-marketplace` → `redator-anuncio` → `revisor-anuncio` → agente principal apresenta ao usuário → `curador-base` registra o que ficou decidido.

## Contrato de handoff

**O agente principal envia tudo na tarefa,** porque o subagente não vê a conversa:
- objetivo e resultado esperado;
- produto, SKU, canal e caminhos dos arquivos;
- decisões já tomadas e autorizações, como pesquisa externa;
- limites e formato do retorno.

**O subagente devolve só isto, sem narrar o processo:**

```text
STATUS: concluido | parcial | bloqueado
RESULTADO: entrega pronta ou resumo curto
EVIDENCIAS: fonte, arquivo e data de cada ponto relevante
ARQUIVOS: caminhos criados ou alterados, ou "nenhum"
PENDENCIAS: perguntas para o usuário e o que falta, ou "nenhuma"
```

## Regras
- **Quem fala com o usuário é o agente principal.** O subagente devolve as perguntas em PENDENCIAS.
- **Commit, merge, publicação e envio** ficam com o agente principal, depois de aprovação.
- **Um nível só:** subagente não aciona outro subagente. O encadeamento é feito pelo principal.
- **Delegue quando compensa:** tarefa longa, especializada ou revisão independente. Tarefa curta o principal faz, porque subagente custa mais tokens.
- **Paralelo só em trabalho independente:** nunca dois agentes editando o mesmo arquivo.

## Modo sequencial (ferramenta sem subagente)
Abra o arquivo do agente, execute a tarefa nesse papel e entregue no formato do contrato. Antes do próximo agente, use só esse retorno como entrada. Na revisão, use se possível uma conversa nova.

## Criar um agente
1. Crie `.agents/agents/<nome>.md` com `name` (igual ao arquivo), `description` (quando acionar) e `readonly`.
2. No corpo, aponte para as skills e os documentos. Não copie fatos da base.
3. Atualize esta tabela e a de `AGENTS.md`, e rode `node scripts/sync-agents.mjs`.
