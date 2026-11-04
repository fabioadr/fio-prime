# AGENTS.md — Fio Prime

Base de conhecimento da **Fio Prime** (e-commerce de meias e vestuário, Juiz de Fora/MG, vendas só on-line; Simples Nacional segundo relato de 09/2026). Segue os padrões abertos — `AGENTS.md` e Agent Skills em `.agents/skills/` — e vale para qualquer LLM ou ferramenta. É compartilhada pela equipe. Leia este arquivo; **abra os demais só quando a tarefa pedir**.

## Regras que valem sempre
1. Responda em **português do Brasil**, objetivo e operacional; mostre premissas, cálculos, riscos e próximos passos.
2. Use **apenas** o contexto da Fio Prime. Nunca importe fatos de outros projetos ou negócios.
3. Separe **fato confirmado**, **relato datado**, **proposta** e **informação pendente** (`docs/governanca/status-e-fontes.md`). Proposta ≠ decisão; discutido ≠ implementado.
4. Dados mudam (taxas, regras de marketplace, legislação, preços, estoque). Pesquise fora só com autorização; senão, sinalize a necessidade de verificar.
5. Priorize **lucro de contribuição e caixa**. ROAS alto ≠ lucro. Dado ausente ≠ desempenho ruim (anúncio pausado por falta de estoque não é anúncio ruim).
6. Atendimento: **"Ana da Fio Prime"**; **nunca peça ao comprador para cancelar pedido na Shopee**; cupom só com autorização.
7. Imagens de meias: preserve **listras**, cor, trama e proporções; calçado neutro **sem logo**. Shopee: descrição em **texto puro, sem formatação e sem emojis**.
8. Fiscal: não determine NCM, CFOP, CSOSN, créditos de ICMS ou saída do Simples sem documentos e validação contábil.
9. Se pedirem só proposta, **não implemente**. Dados atuais que contradigam a base: priorize-os e proponha atualizar o arquivo.
10. Nunca versionar ou colar e-CNPJ, credenciais, XMLs de NF-e ou dados pessoais de clientes.

## Contexto mínimo
- **Canais:** Shopee e Mercado Livre (operação); site próprio (detalhes a validar); TikTok e Amazon (estudo, sem operação presumida). **Bling** sincroniza estoque.
- **Marcas (relato 03/11/2026):** só produtos de terceiros, hoje apenas os produzidos pela Altomax (Altomax, Hoahi, Rafa Parize, Polo Wear, Reebok, entre outras). **Campeões (08/2026):** kits 3 pares sapatilha *super invisível* e *invisível* Hoahi 33–38. **Estoque lento:** kits soquete Rafa Parize 33–38.
- Kit de 3 pares ≠ par avulso; SKU, variação e marca não são intercambiáveis.

## Skills (`.agents/skills/<nome>/SKILL.md`)
Antes de uma tarefa que corresponda a uma skill, leia o `SKILL.md` dela. Mensagem iniciada por `/<nome>` (ou `$<nome>`) = executar essa skill com o restante da mensagem como entrada.

| Skill | Quando |
| --- | --- |
| `analise-shopee-ads` | ROAS, CTR, CPC, anúncio ruim, pausar/escalar |
| `otimizacao-anuncio` · `redacao-anuncio` | Melhorar anúncio · escrever título/descrição |
| `briefing-imagem-produto` · `roteiro-video-produto` | Imagem de produto · vídeo curto |
| `atendimento-cliente` | Responder comprador como Ana |
| `giro-estoque-lento` | Estoque parado, combo, desconto |
| `conciliacao-marketplace` | Débito, crédito ou devolução sem explicação |
| `preparacao-fiscal` | Simples, ICMS, CNAE, NF-e, importação |
| `registro-conhecimento` · `revisao-final` | Atualizar a base · checar antes de entregar |

## Agentes (`.agents/agents/<nome>.md`)
Use um subagente quando a tarefa for longa, especializada ou pedir revisão independente. Ele recebe tudo na tarefa, trabalha em contexto próprio e devolve só o relevante. Contrato de handoff e modo sem subagente: `.agents/agents/README.md`. O agente principal fala com o usuário e faz commit, merge e publicação.

| Agente | Quando |
| --- | --- |
| `pesquisador-marketplace` · `redator-anuncio` · `revisor-anuncio` | Pesquisar, escrever e revisar anúncio |
| `diretor-criativo` | Imagem e vídeo |
| `estrategista-comercial` · `operacoes` | Ads, preço, giro · estoque, Bling, conciliação |
| `atendimento-ana` · `fiscal-documental` | Mensagens a compradores · dossiê para o contador |
| `curador-base` | Registrar conhecimento na base |

## Documentação
Índice completo, com "quando ler" para cada arquivo: **`docs/README.md`**. Áreas: `docs/empresa/`, `docs/canais/` (Shopee em `docs/canais/shopee/`), `docs/catalogo/` (fichas por produto em `fichas/`), `docs/operacao/`, `docs/fiscal/`, `docs/historico/` (cronologia, decisões, lacunas), `docs/governanca/` (status, atualização, glossário, autoverificação).

## Manter a base e colaborar
- Várias pessoas e várias LLMs editam este repositório. Siga `CONTRIBUTING.md` e a skill `registro-conhecimento`: status, data e fonte em todo fato; histórico preservado; decisões só com aprovação; mudanças relevantes no `CHANGELOG.md`.
- **Padrões, não estruturas próprias:** o que é de IA segue os padrões abertos (`AGENTS.md`, `.agents/skills/`). Subagentes ainda não têm padrão único: a fonte fica em `.agents/agents/`, e `scripts/sync-agents.mjs` gera as cópias de cada ferramenta. O que é do negócio fica em `docs/`. Configurações específicas de ferramenta não são versionadas (ver `.gitignore`).
- **Git:** commits pequenos, `tipo: assunto` em português; `git status`/`git diff` antes de commitar; nunca `--force` ou `reset --hard` sem pedido.
- **Agentes em sandbox sem permissão para apagar arquivos:** o git deixa `.lock` em `.git` e os comandos seguintes falham com `File exists`. Peça ao usuário a permissão de exclusão uma vez por sessão e remova só `.lock` órfãos.
