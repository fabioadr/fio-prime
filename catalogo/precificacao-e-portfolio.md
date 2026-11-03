---
title: "Portfólio, precificação e crescimento"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§4); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Giro de estoque lento x campeões; modelo de margem unitária."
---

# Portfólio, precificação e crescimento

> Numeração de seções (`§`) citada no texto refere-se à memória v1.0.0 original (ver `git show f655289:FIO_PRIME_MEMORIA.md`). Siga a legenda de status em `GOVERNANCA.md`.

# 4. Portfólio, precificação e crescimento

## 4.1. Relação entre campeões e itens de giro lento

**Contexto:** em 09/08/2026 o usuário pediu estratégias para aproveitar as vendas dos kits de sapatilhas Hoahi e reduzir dois estoques de soquetes Rafa Parize, para **Shopee, Mercado Livre e TikTok**.

**Hipóteses de trabalho (CRITÉRIO RECOMENDADO, não execução confirmada):**

1. Diagnosticar separadamente falta de tráfego, baixo clique, baixa conversão, preço, prova social e aderência do público para os itens lentos.
2. Testar complementos, kits combinados ou ofertas relacionadas aos produtos âncora **se** houver compatibilidade entre público, regras do marketplace e margens.
3. Produzir vídeos/fotos que resolvam objeções concretas, sem descaracterizar o item.
4. Medir giro, margem de contribuição, margem após mídia, taxa de devolução e variação do estoque em vez de usar apenas número de pedidos.
5. Evitar subsidiar um item lento com tanto desconto que o ganho de giro vire prejuízo.

**Não confirmado:** que a Shopee permita determinada configuração de kits/cross-sell em todas as contas; que ofertas já tenham sido lançadas; que o estoque remanescente continue próximo de 100.

## 4.2. Precificação e margem por SKU

Não há tabela atual de custos de compra, impostos por SKU, tarifas por canal, frete, preço ou margens. Qualquer cálculo de promoção ou ROAS de equilíbrio depende desses dados.

**Modelo de resultado unitário recomendado:**

```text
Receita efetiva do pedido (base consistente, após descontos financiados pelo vendedor)
- CMV do item/kit (incluindo custos de aquisição atribuíveis)
- tributos incidentes na venda não incluídos em outro componente
- comissões e tarifas do marketplace
- subsídio de frete/participação logística do vendedor
- embalagem e custos variáveis de manuseio
- cupons, cashback e promoções suportados pela empresa (se não deduzidos acima)
- provisão de devoluções e perdas, quando pertinente
= margem de contribuição ANTES da mídia
- custo publicitário atribuível
= contribuição APÓS mídia
```

**Evitar dupla contagem:** impostos incluídos no custo de entrada, desconto já refletido na receita e subsídios já embutidos em tarifas não devem reaparecer em outras linhas.
