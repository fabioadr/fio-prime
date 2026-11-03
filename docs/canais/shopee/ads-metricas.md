---
title: "Shopee Ads — objetivo, métricas e dados mínimos"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §5.1–5.3"
atualizado_em: "2026-11-03"
resumo: "Fórmulas de CTR, CPC, CVR, ROAS, ACoS, TACoS, ROAS de equilíbrio e dados mínimos."
---

# Shopee Ads — objetivo, métricas e dados mínimos

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

## 5.1. Objetivo

Maximizar **contribuição econômica incremental e sustentável** das campanhas, considerando ROAS, margem, estoques e giro. Um ROAS mais alto pode não significar um produto mais lucrativo se os custos variáveis forem diferentes.

## 5.2. Métricas padronizadas

| Indicador | Fórmula | Observações |
| --- | --- | --- |
| CTR | Cliques ÷ impressões | Multiplicar por 100 para %. |
| CPC | Investimento ÷ cliques | Para cliques > 0. |
| Conversão por clique (CVR) | Pedidos atribuídos ÷ cliques | Validar janela/modelo de atribuição; não misturar pedidos e unidades. |
| Custo por pedido (CPO/CPA) | Gasto ÷ pedidos atribuídos | Se pedidos = 0, indicador indefinido, não zero. |
| Receita média por pedido atribuído | Receita atribuída ÷ pedidos atribuídos | Usar mesma janela e escopo. |
| ROAS de anúncios | Receita atribuída ÷ gasto em anúncios | Se gasto = 0, ROAS indefinido. |
| ACoS | Gasto em anúncios ÷ receita atribuída | Para receita atribuída > 0; inverso do ROAS quando mesma base. |
| TACoS | Gasto em anúncios ÷ receita total do escopo | Exige vincular período, produto e canal; não confundir com ACoS. |
| Margem de contribuição pré-Ads (%) | Contribuição pré-mídia ÷ receita comparável | Base deve coincidir com a receita usada no ROAS. |
| ROAS de equilíbrio aproximado | `1 ÷ margem de contribuição pré-Ads (decimal)` | Válido com custos lineares/proporcionais e bases comparáveis. |
| ROAS-alvo aproximado | `1 ÷ (margem pré-Ads − margem líquida desejada)` | Denominador positivo; aproximado e condicionado à estrutura de custos. |

**Exemplo puramente didático:** se a margem pré-mídia for 25% da mesma receita usada no ROAS, o ROAS de equilíbrio aproximado é **4,0**. Esse 25% é **hipotético**, não corresponde a margem apurada da Fio Prime.

## 5.3. Dados mínimos para uma análise confiável

**Por produto/anúncio e por dia**, idealmente em exportação que preserve identificadores:

- Nome e ID do anúncio; SKU e variação/kit.
- Data, estado do anúncio, objetivo, tipo de campanha e alterações relevantes.
- Impressões, cliques, investimento, pedidos atribuídos, unidades e receita atribuída.
- Receita/vendas totais do produto (inclusive orgânicas), preço médio e descontos.
- Estoque disponível por variação, datas de ruptura e reativação; variações indisponíveis durante veiculação.
- Custo variável por pedido e por kit, tarifas, tributos, frete e mídia atribuída.
- Se disponível: termos de busca, posicionamento, qualidade do tráfego e métricas de página.

**Cuidado:** disponibilidade diária pode não ser recuperável retrospectivamente. Não inventar datas de ruptura; sinalizar aproximações.
