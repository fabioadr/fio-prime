# .agents/skills/

Skills no padrão aberto **Agent Skills** (<https://agentskills.io/specification>), no caminho de projeto lido nativamente por Codex, Cursor, GitHub Copilot, Gemini CLI e OpenCode. Cada skill é uma pasta com um `SKILL.md`. O frontmatter traz `name` (igual ao nome da pasta, minúsculas e hífens) e `description` (o que faz e quando usar).

**Como funciona:** a ferramenta lê só o `name` e a `description` de todas as skills. Quando a tarefa corresponde a uma delas, carrega o `SKILL.md`, e os documentos citados em `docs/` são abertos sob demanda. Na maioria das ferramentas, as skills também aparecem como `/nome-da-skill`.

| Skill | Quando usar |
| --- | --- |
| [`analise-shopee-ads`](analise-shopee-ads/SKILL.md) | ROAS, ACoS, CTR, CPC, anúncio ruim, pausar ou escalar campanha |
| [`otimizacao-anuncio`](otimizacao-anuncio/SKILL.md) | Auditar e melhorar página ou anúncio, conversão baixa |
| [`redacao-anuncio`](redacao-anuncio/SKILL.md) | Título e descrição prontos para colar, com evidência, termos de busca e dados obrigatórios (pergunta o que falta antes da versão final) |
| [`briefing-imagem-produto`](briefing-imagem-produto/SKILL.md) | Foto, edição ou geração de imagem de meia; revisar imagem |
| [`roteiro-video-produto`](roteiro-video-produto/SKILL.md) | Vídeo curto, gancho, texto na tela |
| [`atendimento-cliente`](atendimento-cliente/SKILL.md) | Responder comprador como Ana da Fio Prime |
| [`giro-estoque-lento`](giro-estoque-lento/SKILL.md) | Estoque parado, combo, desconto para girar |
| [`conciliacao-marketplace`](conciliacao-marketplace/SKILL.md) | Débito, crédito, repasse ou devolução sem explicação |
| [`preparacao-fiscal`](preparacao-fiscal/SKILL.md) | Simples, ICMS, CNAE, NF-e, importação (dossiê para o contador) |
| [`registro-conhecimento`](registro-conhecimento/SKILL.md) | Registrar fato, decisão ou experimento na base |
| [`revisao-final`](revisao-final/SKILL.md) | Checagem antes de entregar qualquer coisa |

## Criar uma skill nova
1. Crie `.agents/skills/<nome-da-skill>/SKILL.md`, com o nome em minúsculas e hífens, igual à pasta.
2. Frontmatter só com campos do padrão: `name`, `description` (até 1024 caracteres, com palavras-gatilho) e `metadata` (versao, atualizado_em, dono). Não use campos exclusivos de uma ferramenta.
3. Corpo: Leia antes → Entradas → Passos → Saída → Não faça → Quando devolver para uma pessoa. Até ~500 linhas; detalhes em `references/` dentro da pasta.
4. Não copie fatos da base para dentro da skill: aponte para o arquivo em `docs/`.
5. Adicione a skill nesta tabela e em `AGENTS.md`.

> **Claude Code** ainda lê skills só em `.claude/skills/`. Rode `node scripts/sync-claude-skills.mjs` para copiá-las para lá (a pasta é ignorada pelo git). Não edite as cópias.
