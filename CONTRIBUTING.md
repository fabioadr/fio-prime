# Como contribuir

Este repositório é editado por várias pessoas e por várias LLMs. As regras abaixo mantêm a base confiável.

## Papéis
- **Responsável pela base (Fábio):** aprova fatos novos, decisões, regras de comportamento e mudanças estruturais.
- **Equipe:** usa a base, propõe correções e registra fatos com fonte. Qualquer um pode abrir uma proposta de mudança.
- **LLMs:** propõem e redigem; **não decidem**. Toda alteração feita por LLM é revisada por uma pessoa antes do merge.

## Fluxo (sem pull request)
1. `git switch main` e `git pull` para atualizar.
2. Crie um branch: `git switch -c tipo/assunto` (ex.: `fato/estoque-rafa-parize`, `skill/nova-skill`).
3. Edite e confira com `git diff`.
4. Commit pequeno e temático (padrão abaixo).
5. O responsável aprova o diff (na conversa ou no terminal). Depois, merge na `main`: `git switch main`, `git merge --no-ff tipo/assunto` e `git push`.

Não se abre pull request. Uma LLM só faz o merge depois da aprovação do responsável.

## Padrão de commit
`tipo: assunto curto em português`. Tipos: `feat` (skill ou documento novo), `fato` (registro de informação), `decisao` (decisão aprovada), `fix` (correção), `docs` (guias), `refactor` (reorganização sem mudar conteúdo), `chore` (manutenção). Se uma LLM ajudou, mantenha a linha de coautoria que a ferramenta adicionar.

## Regras de conteúdo
- Todo fato com **status** (legenda em `docs/governanca/status-e-fontes.md`; regra em `docs/governanca/atualizacao.md`), **data do fato**, data de inclusão e **fonte**.
- **Não apague histórico:** valores antigos ficam marcados como históricos.
- Cada fato mora em **um** arquivo temático; os outros apontam para ele.
- Proposta não é decisão: decisões só em `docs/historico/decisoes.md`, com aprovação.
- **Proibido versionar:** credenciais, e-CNPJ, XMLs de NF-e, chaves de acesso, exports com dados pessoais de clientes. O `.gitignore` bloqueia parte disso, mas a responsabilidade é de quem faz o commit.
- **Padrões abertos, não estruturas próprias:** tudo que é de IA segue os padrões de mercado (`AGENTS.md` na raiz, skills em `.agents/skills/<nome>/SKILL.md`). Exceção documentada: subagentes não têm padrão único, então a fonte fica em `.agents/agents/`, com cópias geradas. Não crie outras pastas de IA nem arquivos de uma ferramenta só; configurações locais de ferramenta ficam fora do git.
- **Arquivos pequenos:** um tema por arquivo. Se um arquivo passar de ~80 linhas, divida e atualize `docs/README.md`.
- Mudanças relevantes vão para o `CHANGELOG.md`.

## Criar uma skill ou um documento
- **Skill:** siga `.agents/skills/README.md` e adicione-a à tabela do `AGENTS.md`.
- **Agente:** siga `.agents/agents/README.md` e adicione-o à tabela do `AGENTS.md`.
- **Documento:** crie-o na pasta do tema em `docs/`, com cabeçalho (`title`, `origem`, `atualizado_em`, `resumo`), e adicione-o a `docs/README.md`.

## O que fica fora do repositório
Rascunhos, exports com dados, XMLs e arquivos pessoais ficam fora desta pasta (ou em caminhos ignorados pelo `.gitignore`). Só entra no git o que for conhecimento compartilhável da Fio Prime.
