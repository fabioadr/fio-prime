# Changelog

Mudanças relevantes na base de conhecimento da Fio Prime. Versionamento: PATCH = correção; MINOR = conteúdo novo; MAJOR = mudança estrutural ou de regras de interpretação.

## 2.0.0 — 2026-11-03

- **Estrutura padronizada:** skills movidas para `.agents/skills/` (caminho aberto lido por Codex, Cursor, Copilot, Gemini CLI e OpenCode); removidas as pastas próprias `agentes/` e `comandos/`, porque não há padrão comum para subagentes e as skills já são invocáveis como comando nas ferramentas. Papéis e regras de escalonamento foram incorporados às skills.
- **Documentação em `docs/`**, dividida em arquivos pequenos (Shopee Ads, catálogo com fichas por produto, operação, fiscal e governança). O texto foi copiado sem alteração.
- `FIO_PRIME_MEMORIA.md` substituído por `docs/README.md` (índice e resumo) e por este `CHANGELOG.md`. `INSTRUCOES_PROJETO_FIO_PRIME.md` substituído por `docs/ia/instrucoes-para-chats.md`, em versão curta que remete ao `AGENTS.md`. `GOVERNANCA.md` dividido em `docs/governanca/`.
- Removidos `CLAUDE.md` e `GEMINI.md`: as ferramentas leem `AGENTS.md`. O adaptador opcional para Claude Code está em `scripts/sync-claude-skills.mjs`.
- `operacao/playbooks.md` removido: foi substituído pelas skills (o conteúdo continua no histórico do git).

## 1.2.0 — 2026-11-03

- Adicionados `agentes/`, `skills/` (formato aberto Agent Skills) e `comandos/`, todos agnósticos de LLM.
- `AGENTS.md` e `INSTRUCOES_PROJETO_FIO_PRIME.md` sem referência a uma LLM específica; `CLAUDE.md` e `GEMINI.md` são apenas ponteiros.
- Novos: `README.md`, `CONTRIBUTING.md`, `docs/COMO_USAR.md`, `canais/site-proprio.md`.
- Registrados: regra de descrição Shopee em texto puro (12/10/2026) e a iniciativa de captação via etiqueta/WhatsApp (11/2026).

## 1.1.0 — 2026-11-03

- Conteúdo dividido em arquivos temáticos (empresa, canais, catálogo, operação, fiscal, histórico) sem alteração de texto; este arquivo vira índice + resumo.
- Adicionados `AGENTS.md`, `CLAUDE.md`, `.gitignore`, `.gitattributes` e versionamento git.

## 1.0.0 — 2026-10-12

- Primeira baseline unificada com base apenas nas conversas do projeto Fio Prime disponibilizadas na sessão.
- Incluídos: contexto de negócio; canais; catálogo; atendimento; fotografia; operação/Bling; Shopee Ads; fiscal/importação; conciliação; cronologia; playbooks; convenções de versionamento.
- Registradas limitações de evidência, status de confiança e lacunas prioritárias para atualização posterior.
