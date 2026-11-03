---
title: "Shopee Ads — pausas, rupturas e diagnóstico"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §5.4–5.5"
atualizado_em: "2026-11-03"
resumo: "Estados de veiculação por dia e árvore de causas de ROAS baixo."
---

# Shopee Ads — pausas, rupturas e diagnóstico

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

## 5.4. Tratamento obrigatório de períodos pausados e rupturas

Classificar cada combinação `data × anúncio` em uma das condições:

| Estado | Definição operacional | Tratamento analítico |
| --- | --- | --- |
| **Ativo com estoque adequado** | Anúncio elegível e principais variações disponíveis | Base primária para comparar eficiência. |
| **Ativo com estoque parcial** | Há veiculação, mas variações relevantes indisponíveis | Analisar separadamente: possível queda de conversão por mix. |
| **Pausado por estoque** | Campanha sem veiculação devido à ruptura ou perda de variações | Não tratar ausência de cliques/pedidos como fracasso do criativo. |
| **Pausado por decisão comercial** | Veiculação interrompida por estratégia/orçamento | Separar de ruptura. |
| **Sem dados / causa desconhecida** | Exportação incompleta ou motivo não identificado | Não inferir automaticamente pause ou estoque zerado. |

**Regra:** comparar anúncios em janelas de **dias efetivamente elegíveis** e, quando possível, em coortes de condições de estoque similares. Registrar o efeito de mudanças de preço, catálogo, fotos, anúncio e mídia antes de interpretar uma série temporal.

## 5.5. Diagnóstico de baixo ROAS: árvore de causas

| Sintoma | Hipóteses iniciais a testar | Próxima verificação |
| --- | --- | --- |
| Muitas impressões, CTR baixo | Imagem/capa, título, preço visível, público inadequado, ranking de oferta | Comparar criativo e oferta com concorrência **somente se pesquisa externa autorizada**. |
| CTR razoável, conversão baixa | Variação sem estoque, imagem desalinhada, preço/frete, descrição, avaliações, prazo de entrega | Auditar página e a disponibilidade real. |
| CPC alto | Concorrência, posicionamento, termos, eficiência de lance | Comparar CPC com conversão e margem, não isoladamente. |
| Conversão razoável, ROAS baixo | Ticket menor, kit/unidade, atribuição, preço e gasto | Examinar preço efetivo, receita atribuída e estrutura da oferta. |
| ROAS bom, margem ruim | CMV, taxas, ICMS, frete, descontos | Recalcular lucro de contribuição por pedido. |
| Queda brusca após pausa | Falta de variações, reativação, histórico não comparável | Segmentar períodos pré/pós-ruptura. |
| Tráfego pago canibaliza vendas orgânicas | Mudança no mix de origem das vendas | Analisar TACoS e vendas totais, evitando causalidade sem teste. |
