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
`tipo: assunto curto em português`. Tipos: `feat` (skill, agente, comando ou seção nova), `fato` (registro de informação), `decisao` (decisão aprovada), `fix` (correção), `docs` (guias), `refactor` (reorganização sem mudar conteúdo), `chore` (manutenção). Se uma LLM ajudou, mantenha a linha de coautoria que a ferramenta adicionar.

## Regras de conteúdo
- Todo fato com **status** (legenda em `GOVERNANCA.md`), **data do fato**, data de inclusão e **fonte**.
- **Não apague histórico:** valores antigos ficam marcados como históricos.
- Cada fato mora em **um** arquivo temático; os outros apontam para ele.
- Proposta não é decisão: decisões só em `historico/decisoes.md`, com aprovação.
- **Proibido versionar:** credenciais, e-CNPJ, XMLs de NF-e, chaves de acesso, exports com dados pessoais de clientes. O `.gitignore` bloqueia parte disso, mas a responsabilidade é de quem faz o commit.
- **Agnóstico de LLM:** nada de regra, skill ou comando que funcione só em uma ferramenta. Configurações específicas de ferramenta ficam fora do repositório ou são só ponteiros para `AGENTS.md`.

## Criar agente, skill ou comando
Veja os modelos em `agentes/README.md`, `skills/README.md` e `comandos/README.md`. Depois, atualize as tabelas desses READMEs e de `AGENTS.md`.
