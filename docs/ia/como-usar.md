---
title: "Como usar a base com qualquer LLM"
atualizado_em: "2026-11-03"
resumo: "Como cada tipo de ferramenta acessa o repositório: agentes locais, chats ligados ao GitHub e upload manual."
---

# Como usar a base com qualquer LLM

A **fonte única** é este repositório: `AGENTS.md` (instruções), `.agents/skills/` (procedimentos) e `docs/` (conhecimento). Cada ferramenta só precisa enxergar esses arquivos.

## 1. Agentes que abrem a pasta (terminal ou editor)
Exemplos: Codex, Cursor, GitHub Copilot, Gemini CLI, OpenCode, Claude Code.

- Abra a pasta do repositório. Essas ferramentas leem `AGENTS.md` na raiz.
- Skills em `.agents/skills/` são descobertas nativamente por Codex, Cursor, Copilot, Gemini CLI e OpenCode, e aparecem como `/nome-da-skill` (no Codex, `$nome-da-skill`).
- **Exceções conhecidas (verifique na versão que você usa):**
  - *Claude Code:* lê `AGENTS.md` quando não há `CLAUDE.md` (por isso o repositório não tem um), mas só lê skills em `.claude/skills/`. Rode `node scripts/sync-claude-skills.mjs` após cada mudança nas skills. A cópia é local e ignorada pelo git.
  - *Gemini CLI:* se a sua versão não carregar o `AGENTS.md`, configure o arquivo de contexto nas configurações locais da ferramenta para `AGENTS.md`. Não crie `GEMINI.md` no repositório.
- Configurações locais de ferramentas (`.claude/`, `.gemini/`, `.cursor/`, `.codex/` etc.) não são versionadas.
- Esses agentes podem editar arquivos e fazer commit: siga `CONTRIBUTING.md`.

### Agentes para handoff
Subagentes ficam em `.agents/agents/`. Depois de clonar ou alterar, rode `node scripts/sync-agents.mjs`. Em ferramentas sem subagente, use o modo sequencial descrito em `.agents/agents/README.md`. Exemplo: "use o agente revisor-anuncio neste texto".

## 2. Chats no navegador ou app, ligados ao GitHub (recomendado para o dia a dia)
Exemplos: projetos no Claude.ai, projetos no ChatGPT, Gems ou chats do Gemini. Pré-requisito: o repositório estar no GitHub (pode ser privado).

1. Crie um projeto ou assistente "Fio Prime".
2. Cole o bloco de `docs/ia/instrucoes-para-chats.md` no campo de instruções.
3. Adicione o repositório pela integração com o GitHub, selecionando `AGENTS.md`, `.agents/skills/` e `docs/`. Confira se a pasta `.agents` aparece no seletor; se não aparecer, a ferramenta ainda funciona com `AGENTS.md` + `docs/`, mas sem as skills.
4. **Sincronize depois de cada mudança relevante no repositório.** No Claude.ai, por exemplo, a sincronização é manual (botão de sincronizar no conhecimento do projeto) e traz só os arquivos do branch escolhido.
5. Use normalmente: `/atendimento-cliente ...` ou "use a skill analise-shopee-ads ...".

**O chat lê, mas não grava no repositório.** Para registrar algo descoberto no chat, peça a skill `registro-conhecimento`: a LLM entrega o trecho e o arquivo de destino, e alguém (ou um agente do item 1) faz o commit.

## 3. Upload manual de arquivos (último recurso)
Funciona em qualquer ferramenta, mas a cópia **fica desatualizada** a cada mudança. Envie `AGENTS.md`, `docs/README.md` e os arquivos do tema (mais o `SKILL.md` da tarefa) e anote a data do upload.

## Boas práticas para a equipe
- Comece dizendo a tarefa. A LLM decide quais arquivos abrir.
- Anexe dados atuais (exports, prints). A base é histórica, não um espelho em tempo real.
- Peça a skill `revisao-final` se uma resposta tratar proposta como decisão ou ROAS como lucro.
- Nunca cole senhas, e-CNPJ, XMLs ou dados de clientes em chats sem necessidade.
