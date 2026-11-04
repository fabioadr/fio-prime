---
title: "Shopee — visão geral"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §2.1"
atualizado_em: "2026-11-03"
resumo: "Particularidades da Shopee e índice de Shopee Ads."
---

# Shopee — visão geral

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

## 2.1. Shopee

**CONFIRMADO NO PROJETO:** canal relevante para vendas, atendimento e campanhas pagas. Há operações de Shopee Ads e relatos de desempenho positivo em determinados momentos (16/06/2026). Em 12/10/2026 foi solicitada análise de ROAS com foco em anúncios de desempenho ruim.

**Particularidade crítica:** quando o anúncio é pausado por falta de estoque de todas ou da maior parte das variações, podem surgir períodos sem dados. Não interpretar lacunas de veiculação como evidência de baixa taxa de conversão.

**Cuidados com comunicação na plataforma:** não orientar o consumidor a cancelar pedidos. Evitar mensagens que contrariem políticas de marketplace. Mensagens de chat devem ser simples, acolhedoras e voltadas à resolução da situação.

**Automação conversacional:** foi relatado que a IA do chat da Shopee pode parar em uma mensagem com opções sem resposta do comprador. Nessas situações, a Fio Prime deseja mensagens humanas de reengajamento com foco em conversão (16/06/2026).

## Título e descrição
Regras, limites e fontes: [`regras-de-anuncio.md`](regras-de-anuncio.md). Método: skill `redacao-anuncio`.

## Shopee Ads — arquivos
| Arquivo | Conteúdo |
| --- | --- |
| [`ads-metricas.md`](ads-metricas.md) | Objetivo, métricas padronizadas e fórmulas, dados mínimos |
| [`ads-estoque-e-diagnostico.md`](ads-estoque-e-diagnostico.md) | Tratamento de pausas e rupturas, árvore de causas de ROAS baixo |
| [`ads-otimizacao.md`](ads-otimizacao.md) | Processo de otimização e anúncios em investigação (meias masculinas Hoahi) |

Procedimento passo a passo: skill `analise-shopee-ads` (`.agents/skills/analise-shopee-ads/SKILL.md`).
