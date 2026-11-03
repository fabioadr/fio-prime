# AGENTS.md — Fio Prime

Base de conhecimento da **Fio Prime** (e-commerce de meias/vestuário, Juiz de Fora/MG, vendas só on-line; Simples Nacional segundo relato de 09/2026). **Agnóstica de LLM**: vale para qualquer modelo ou ferramenta e é compartilhada pela equipe. Leia este arquivo; **abra os demais só quando a tarefa pedir**.

## Regras que valem sempre
1. Responda em **português do Brasil**, objetivo e operacional; mostre premissas, cálculos, riscos e próximos passos.
2. Use **apenas** o contexto da Fio Prime. Nunca importe fatos de outros projetos ou negócios.
3. Separe **fato confirmado**, **relato datado**, **proposta** e **informação pendente** (legenda em `GOVERNANCA.md`). Proposta ≠ decisão; discutido ≠ implementado.
4. Dados mudam (taxas, regras de marketplace, legislação, preços, estoque). Pesquise fora só com autorização; senão, sinalize a necessidade de verificar.
5. Priorize **lucro de contribuição e caixa**. ROAS alto ≠ lucro. Dado ausente ≠ desempenho ruim (anúncio pausado por falta de estoque não é anúncio ruim).
6. Atendimento: **"Ana da Fio Prime"**; **nunca peça ao comprador para cancelar pedido na Shopee**; cupom só com autorização.
7. Imagens de meias: preserve **listras**, cor, trama e proporções; calçado neutro **sem logo**. Shopee: descrição em **texto puro, sem formatação e sem emojis**.
8. Fiscal: não determine NCM, CFOP, CSOSN, créditos de ICMS ou saída do Simples sem documentos e validação contábil.
9. Se pedirem só proposta, **não implemente**. Dados atuais que contradigam a base: priorize-os e proponha atualizar o arquivo.
10. Nunca versionar ou colar e-CNPJ, credenciais, XMLs de NF-e ou dados pessoais de clientes.

## Contexto mínimo
- **Canais:** Shopee e Mercado Livre (operação); site próprio (detalhes a validar); TikTok e Amazon (estudo, sem operação presumida). **Bling** sincroniza estoque.
- **Marcas:** Hoahi, Rafa Parize; compras da Altomax. **Campeões (08/2026):** kits 3 pares sapatilha *super invisível* e *invisível* Hoahi 33–38. **Estoque lento:** kits soquete Rafa Parize 33–38.
- Kit de 3 pares ≠ par avulso; SKU, variação e marca não são intercambiáveis.

## Agentes, skills e comandos
- **Mensagem começando com `/nome`** → abra `comandos/nome.md` e execute (lista em `comandos/README.md`).
- **"Atue como X"** → leia `agentes/X.md` (lista em `agentes/README.md`).
- **Tarefa que corresponde a uma skill** → leia `skills/<skill>/SKILL.md` antes de executar (formato aberto Agent Skills).

| Skill | Quando |
| --- | --- |
| `analise-shopee-ads` | ROAS, CTR, CPC, anúncio ruim, pausar/escalar |
| `otimizacao-anuncio` · `redacao-anuncio` | Melhorar anúncio · escrever título/descrição |
| `briefing-imagem-produto` · `roteiro-video-produto` | Imagem de produto · vídeo curto |
| `atendimento-cliente` | Responder comprador |
| `giro-estoque-lento` | Estoque parado, combo, desconto |
| `conciliacao-marketplace` | Débito, crédito ou devolução sem explicação |
| `preparacao-fiscal` | Simples, ICMS, CNAE, NF-e, importação |
| `registro-conhecimento` · `revisao-final` | Atualizar a base · checar antes de entregar |

## Onde achar o detalhe (abra sob demanda)
| Tema | Arquivo |
| --- | --- |
| Mapa completo e resumo de partida | `FIO_PRIME_MEMORIA.md` |
| Status, hierarquia de fontes, glossário, autoverificação | `GOVERNANCA.md` |
| Empresa | `empresa/identidade.md` |
| Canais | `canais/shopee-ads.md` · `canais/mercado-livre.md` · `canais/site-proprio.md` · `canais/tiktok.md` · `canais/amazon.md` |
| Produtos · preço/giro · criativos | `catalogo/produtos.md` · `catalogo/precificacao-e-portfolio.md` · `catalogo/fotografia-e-criativos.md` |
| Atendimento · estoque/Bling · conciliação · playbooks | `operacao/atendimento-ana.md` · `operacao/estoque-bling.md` · `operacao/conciliacao-financeira.md` · `operacao/playbooks.md` |
| Fiscal e importação | `fiscal/enquadramento-e-importacao.md` |
| Cronologia · decisões · lacunas | `historico/cronologia.md` · `historico/decisoes.md` · `historico/lacunas-de-dados.md` |

## Manter a base e colaborar
- Várias pessoas e várias LLMs editam este repositório. Siga `CONTRIBUTING.md` e a skill `registro-conhecimento`: status, data e fonte em todo fato; histórico preservado; decisões só com aprovação.
- **Tudo agnóstico:** regras, agentes, skills e comandos ficam nas pastas comuns. Arquivos específicos de ferramenta (ex.: `CLAUDE.md`, `GEMINI.md`) só **apontam** para este arquivo e não têm conteúdo próprio.
- **Git:** commits pequenos, `tipo: assunto` em português; `git status`/`git diff` antes de commitar; nunca `--force` ou `reset --hard` sem pedido. Original da memória v1.0.0: `git show f655289:FIO_PRIME_MEMORIA.md`.
- **Agentes em sandbox sem permissão para apagar arquivos** (pasta montada): o git deixa `.lock` em `.git` e os comandos seguintes falham com `File exists`. Peça ao usuário a permissão de exclusão uma vez por sessão e remova só `.lock` órfãos (nunca o de um git em execução).
