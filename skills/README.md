# skills/

Procedimentos reutilizáveis no formato aberto **Agent Skills** (<https://agentskills.io/specification>): cada skill é uma pasta com um `SKILL.md`. O frontmatter traz `name` (igual ao nome da pasta, minúsculas e hífens) e `description` (o que faz e quando usar). O corpo traz as instruções.

**Como qualquer LLM usa:** lê só o `name` e a `description` de todas as skills (este índice basta). Quando a tarefa corresponde a uma delas, abre o `SKILL.md` correspondente e segue os passos. Os arquivos da base que a skill cita são abertos sob demanda.

| Skill | Quando usar |
| --- | --- |
| [`analise-shopee-ads`](analise-shopee-ads/SKILL.md) | ROAS, ACoS, CTR, CPC, anúncio ruim, pausar ou escalar campanha |
| [`otimizacao-anuncio`](otimizacao-anuncio/SKILL.md) | Auditar e melhorar página ou anúncio, conversão baixa |
| [`redacao-anuncio`](redacao-anuncio/SKILL.md) | Título e descrição prontos para colar (Shopee em texto puro) |
| [`briefing-imagem-produto`](briefing-imagem-produto/SKILL.md) | Foto, edição ou geração de imagem de meia; revisar imagem |
| [`roteiro-video-produto`](roteiro-video-produto/SKILL.md) | Vídeo curto, gancho, texto na tela |
| [`atendimento-cliente`](atendimento-cliente/SKILL.md) | Responder comprador como Ana da Fio Prime |
| [`giro-estoque-lento`](giro-estoque-lento/SKILL.md) | Estoque parado, combo, desconto para girar |
| [`conciliacao-marketplace`](conciliacao-marketplace/SKILL.md) | Débito, crédito, repasse ou devolução sem explicação |
| [`preparacao-fiscal`](preparacao-fiscal/SKILL.md) | Simples, ICMS, CNAE, NF-e, importação (dossiê para o contador) |
| [`registro-conhecimento`](registro-conhecimento/SKILL.md) | Registrar fato, decisão ou experimento na base |
| [`revisao-final`](revisao-final/SKILL.md) | Checagem antes de entregar qualquer coisa |

## Criar uma skill nova
1. Crie `skills/<nome-da-skill>/SKILL.md`, com o nome em minúsculas e hífens, igual à pasta.
2. Frontmatter: `name`, `description` (até 1024 caracteres, com palavras-gatilho) e `metadata` (versao, atualizado_em, dono).
3. Corpo: Leia antes → Entradas → Passos → Saída → Não faça. Até ~500 linhas; detalhes em `references/` dentro da pasta.
4. Não copie fatos da base para dentro da skill: aponte para o arquivo temático.
5. Adicione a skill na tabela acima e em `AGENTS.md`; crie um comando em `comandos/`, se fizer sentido.
6. Siga o fluxo de `CONTRIBUTING.md`.

> Ferramentas que só descobrem skills numa pasta própria (ex.: `.agents/skills`, `.claude/skills`) podem apontar para esta pasta (link simbólico ou configuração da ferramenta). Não mantenha cópias editáveis em outro lugar: a fonte é `skills/`.
