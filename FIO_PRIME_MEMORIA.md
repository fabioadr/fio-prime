---
title: "Fio Prime — memória operacional e estratégica (índice)"
slug: "fio-prime-memoria"
version: "1.1.0"
updated_at: "2026-11-03"
language: "pt-BR"
project: "Fio Prime"
status: "indice-e-resumo"
---

# Fio Prime — Memória operacional e estratégica

**Propósito:** fornecer a qualquer LLM contexto inicial consistente, rastreável e útil para executar tarefas de marketing, vendas, atendimento, anúncios, catálogo, fotografia, operações, integração, análise financeira, tributação e planejamento da Fio Prime.

**Última consolidação:** 12/10/2026. Os dados abaixo **não são um espelho em tempo real** da empresa ou dos marketplaces.

> **Limite de evidência:** esta versão foi elaborada apenas a partir do histórico e das mensagens do projeto Fio Prime disponibilizados para esta consolidação. Alguns diálogos são conhecidos apenas por trechos de histórico; anexos originais, imagens, XMLs e eventuais relatórios não estavam disponíveis para leitura integral nesta sessão. Essa limitação não deve ser preenchida com suposições.

> **v1.1.0:** o conteúdo detalhado foi dividido em arquivos temáticos (sem alteração de texto). Esta página é o índice e o resumo de partida. O texto integral v1.0.0 está no git: `git show f655289:FIO_PRIME_MEMORIA.md`.

## Mapa dos arquivos

| Arquivo | Conteúdo | Origem v1.0.0 |
| --- | --- | --- |
| [`empresa/identidade.md`](empresa/identidade.md) | Dados cadastrais, canais, regime informado e diretrizes de gestão. | §1 |
| [`canais/shopee-ads.md`](canais/shopee-ads.md) | Shopee: particularidades, métricas, manual de análise de Ads e roteiro das meias masculinas Hoahi. | §2.1 e §5 |
| [`canais/mercado-livre.md`](canais/mercado-livre.md) | Atendimento e caso histórico de conciliação. | §2.2 |
| [`canais/tiktok.md`](canais/tiktok.md) | Estratégia comercial (plano, não implantado). | §2.3 |
| [`canais/amazon.md`](canais/amazon.md) | Custos e categorização (estudo, sem operação presumida). | §2.4 |
| [`operacao/estoque-bling.md`](operacao/estoque-bling.md) | Risco de sincronização Bling x marketplaces, estoque por variação, campos cadastrais. | §2.5 e §8 |
| [`catalogo/produtos.md`](catalogo/produtos.md) | Marcas, campeões, estoque lento, fichas de atributos por SKU. | §3 |
| [`catalogo/precificacao-e-portfolio.md`](catalogo/precificacao-e-portfolio.md) | Giro de estoque lento x campeões; modelo de margem unitária. | §4 |
| [`catalogo/fotografia-e-criativos.md`](catalogo/fotografia-e-criativos.md) | Padrão de imagens de meias, copy/vídeo, checklist de publicação. | §6 |
| [`operacao/atendimento-ana.md`](operacao/atendimento-ana.md) | Persona, cenários tratados e regras de redação em marketplaces. | §7 |
| [`operacao/conciliacao-financeira.md`](operacao/conciliacao-financeira.md) | Método de conciliação venda/devolução e modelo de dados. | §10 |
| [`operacao/playbooks.md`](operacao/playbooks.md) | Entrada, saída e critério de aceite por tipo de tarefa. | §11 |
| [`fiscal/enquadramento-e-importacao.md`](fiscal/enquadramento-e-importacao.md) | Relatos fiscais (não é parecer), CNAEs, plano de importação, NF-e. | §9 |
| [`historico/lacunas-de-dados.md`](historico/lacunas-de-dados.md) | Campos prioritários para próxima atualização. | §12 |
| [`historico/cronologia.md`](historico/cronologia.md) | Eventos datados do projeto (maio–outubro/2026). | §13 |
| [`GOVERNANCA.md`](GOVERNANCA.md) | Legenda de status, hierarquia de conflitos, glossário, regra de atualização e autoverificação. | §0, §14, §15.4 e §16 |
| [`historico/decisoes.md`](historico/decisoes.md) | Modelos e log de decisões/experimentos | §15.1–15.2 |

Regras de uso, status de confiança e hierarquia de fontes: [`GOVERNANCA.md`](GOVERNANCA.md). Instruções de comportamento: [`INSTRUCOES_PROJETO_FIO_PRIME.md`](INSTRUCOES_PROJETO_FIO_PRIME.md). Ponto de entrada para LLMs: [`AGENTS.md`](AGENTS.md).

---

## 17. Resumo operacional de partida (para pouco contexto)

A **Fio Prime** é uma empresa de comércio eletrônico de **Juiz de Fora/MG**, informada como optante do **Simples Nacional** e sem loja física (setembro de 2026). Comercializa meias e vestuário/acessórios e opera com **Shopee** e **Mercado Livre**, usando o **Bling** em processos de estoque/cadastro. A **Amazon** foi avaliada para venda e categorização; o **TikTok** é relevante para estratégias comerciais, sem estado de implantação demonstrado.

Os kits de 3 pares de **sapatilhas super invisível Hoahi 33–38** foram descritos como os mais vendidos em agosto de 2026 (variações sortida, branca e preta), acompanhados dos kits **invisível Hoahi 33–38** (branca e preta). Dois kits de soquetes femininas **Rafa Parize** (estampada e branca confortável, 33–38) tinham **quase 100 unidades cada** no relato de 09/08/2026. Em outubro, havia preocupação com **ROAS ruim** de duas meias masculinas Hoahi 39–43, uma unitária e outra kit de 3 pares; períodos sem métricas podem resultar de **pausa por falta de estoque de variações**. O problema ainda exige análise numérica.

O atendimento usa a persona **Ana da Fio Prime**, com mensagens humanas e sem jargão. Não pedir ao comprador para cancelar pedido na Shopee. Fotografias das meias devem conservar **listras, aparência, proporções e texturas**, com protagonismo do produto, estética premium realista e tênis neutro sem marcas.

Em fiscal, há compras da **Altomax**, relatada como fabricante no **Paraguai** e fornecedora no Brasil, e preocupação com **recomposição de ICMS de aproximadamente 17%** em operações mencionadas em 24/09/2026. Foram explorados **regime especial de e-commerce mineiro**, possível saída do Simples, revisão de CNAEs, endereço na JUCEMG e futura **importação própria da China**; **nenhuma decisão/implementação deve ser presumida**. Para qualquer análise séria, exigir dados dos XMLs, custos e regras vigentes.

**Modo de operar:** usar o histórico como ponto de partida, não como banco de dados atual. Priorizar margem real, disponibilidade de estoque, atribuição correta e decisões rastreáveis. Não confundir **ROAS com lucro**, **ausência de anúncio com mau desempenho** ou **intenção com execução**.

---

## Changelog

### 1.0.0 — 2026-10-12

- Primeira baseline unificada com base apenas nas conversas do projeto Fio Prime disponibilizadas na sessão.
- Incluídos: contexto de negócio; canais; catálogo; atendimento; fotografia; operação/Bling; Shopee Ads; fiscal/importação; conciliação; cronologia; playbooks; convenções de versionamento.
- Registradas limitações de evidência, status de confiança e lacunas prioritárias para atualização posterior.

### 1.1.0 — 2026-11-03

- Conteúdo dividido em arquivos temáticos (empresa, canais, catálogo, operação, fiscal, histórico) sem alteração de texto; este arquivo vira índice + resumo.
- Adicionados `AGENTS.md`, `CLAUDE.md`, `.gitignore`, `.gitattributes` e versionamento git.
