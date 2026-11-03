# Como contribuir

Este repositório é editado por várias pessoas e por várias LLMs. As regras abaixo mantêm a base confiável.

## Papéis
- **Responsável pela base (Fábio):** aprova fatos novos, decisões, regras de comportamento e mudanças estruturais.
- **Equipe:** usa a base, propõe correções e registra fatos com fonte. Qualquer um pode abrir uma proposta de mudança.
- **LLMs:** propõem e redigem; **não decidem**. Toda alteração feita por LLM é revisada por uma pessoa antes do merge.

## Fluxo (quando o repositório remoto estiver configurado)
1. `git pull` para atualizar.
2. Crie um branch: `git switch -c tipo/assunto` (ex.: `fato/estoque-rafa-parize`, `skill/nova-skill`).
3. Edite e confira com `git diff`.
4. Commit pequeno e temático (padrão abaixo) e `git push`.
5. Abra um pull request; o responsável revisa e faz o merge.

Mudanças triviais (erro de digitação, link quebrado) podem ir direto ao `main`, se o responsável permitir.

## Padrão de commit
`tipo: assunto curto em português`. Tipos: `feat` (skill ou documento novo), `fato` (registro de informação), `decisao` (decisão aprovada), `fix` (correção), `docs` (guias), `refactor` (reorganização sem mudar conteúdo), `chore` (manutenção). Se uma LLM ajudou, mantenha a linha de coautoria que a ferramenta adicionar.

## Regras de conteúdo
- Todo fato com **status** (legenda em `docs/governanca/status-e-fontes.md`; regra em `docs/governanca/atualizacao.md`), **data do fato**, data de inclusão e **fonte**.
- **Não apague histórico:** valores antigos ficam marcados como históricos.
- Cada fato mora em **um** arquivo temático; os outros apontam para ele.
- Proposta não é decisão: decisões só em `docs/historico/decisoes.md`, com aprovação.
- **Proibido versionar:** credenciais, e-CNPJ, XMLs de NF-e, chaves de acesso, exports com dados pessoais de clientes. O `.gitignore` bloqueia parte disso, mas a responsabilidade é de quem faz o commit.
- **Padrões abertos, não estruturas próprias:** tudo que é de IA segue os padrões de mercado (`AGENTS.md` na raiz, skills em `.agents/skills/<nome>/SKILL.md`). Não crie pastas de IA inventadas nem arquivos de uma ferramenta só; configurações locais de ferramenta ficam fora do git.
- **Arquivos pequenos:** um tema por arquivo. Se um arquivo passar de ~80 linhas, divida e atualize `docs/README.md`.
- Mudanças relevantes vão para o `CHANGELOG.md`.

## Criar uma skill ou um documento
- **Skill:** siga `.agents/skills/README.md` e adicione-a à tabela do `AGENTS.md`.
- **Documento:** crie-o na pasta do tema em `docs/`, com cabeçalho (`title`, `origem`, `atualizado_em`, `resumo`), e adicione-o a `docs/README.md`.

## O que fica fora do repositório
Rascunhos, exports com dados, XMLs e arquivos pessoais ficam fora desta pasta (ou em caminhos ignorados pelo `.gitignore`). Só entra no git o que for conhecimento compartilhável da Fio Prime.
