# Changelog

Mudanças relevantes na base de conhecimento da Fio Prime. Versionamento: PATCH = correção; MINOR = conteúdo novo; MAJOR = mudança estrutural ou de regras de interpretação.

## 2.1.1 — 2026-11-03

- `CONTRIBUTING.md`: fluxo sem pull request; branches por assunto com merge direto na `main`, após aprovação do responsável.

## 2.1.0 — 2026-11-03

- Novo: linha **Altomax Fitness Canelado** (top, bermuda, legging, macacão): visão geral com ícones e benefícios, 4 fichas em `docs/catalogo/fichas/` e `docs/catalogo/skus-altomax-fitness-canelado.md` (36 SKUs nos tamanhos M, G e GG: 30 com GTIN e 6 em aberto até a NF-e). Fontes: catálogo Altomax 2026 (sem preços e contatos), fotos de etiquetas e planilha de SKUs.
- Decisão FP-DEC-2026-001 (`docs/historico/decisoes.md`): composição pela etiqueta, referência pela página do catálogo, "m" = cm.
- Modelo de produto registrado: só produtos de terceiros, hoje os produzidos pela Altomax (Altomax, Hoahi, Rafa Parize, Polo Wear, Reebok, entre outras). Atualizados `AGENTS.md` (linha de marcas), `docs/empresa/identidade.md` e `docs/catalogo/README.md`.
- Novo `docs/catalogo/altomax-fitness-para-anuncios.md` (fatos, limites, fotos e lacunas para títulos, descrições e fotos). Registrado: toda a produção da Altomax vem da mesma fábrica no Paraguai e o público de todo o fitness é feminino.
- Pendências em `docs/historico/lacunas-de-dados.md`; entradas na cronologia; índices atualizados.

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
