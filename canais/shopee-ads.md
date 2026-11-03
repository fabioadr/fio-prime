---
title: "Shopee e Shopee Ads"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§2.1 e §5); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Shopee: particularidades, métricas, manual de análise de Ads e roteiro das meias masculinas Hoahi."
---

# Shopee e Shopee Ads

> Numeração de seções (`§`) citada no texto refere-se à memória v1.0.0 original (ver `git show f655289:FIO_PRIME_MEMORIA.md`). Siga a legenda de status em `GOVERNANCA.md`.

## 2.1. Shopee

**CONFIRMADO NO PROJETO:** canal relevante para vendas, atendimento e campanhas pagas. Há operações de Shopee Ads e relatos de desempenho positivo em determinados momentos (16/06/2026). Em 12/10/2026 foi solicitada análise de ROAS com foco em anúncios de desempenho ruim.

**Particularidade crítica:** quando o anúncio é pausado por falta de estoque de todas ou da maior parte das variações, podem surgir períodos sem dados. Não interpretar lacunas de veiculação como evidência de baixa taxa de conversão.

**Cuidados com comunicação na plataforma:** não orientar o consumidor a cancelar pedidos. Evitar mensagens que contrariem políticas de marketplace. Mensagens de chat devem ser simples, acolhedoras e voltadas à resolução da situação.

**Automação conversacional:** foi relatado que a IA do chat da Shopee pode parar em uma mensagem com opções sem resposta do comprador. Nessas situações, a Fio Prime deseja mensagens humanas de reengajamento com foco em conversão (16/06/2026).

# 5. Shopee Ads — manual de análise do projeto

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

## 5.6. Processo proposto de otimização

1. **Validar dados:** datas, IDs, diferenças entre kits, receita atribuída, pedidos e estoque.
2. **Calcular economia do SKU:** contribuição pré-Ads, ponto de equilíbrio e ROAS-alvo.
3. **Segmentar períodos:** ativos/estoque adequado, estoque parcial, pausados, sem dados.
4. **Priorizar:** maior gasto sem retorno, maior volume de impressões com CTR fraco, maior tráfego com CVR fraco; considerar tamanho amostral.
5. **Auditar anúncio e página:** fotos, listras, diferenciais, título, variações, avaliações, preço, frete, promessa e ficha técnica.
6. **Planejar experimentos:** uma hipótese principal por teste, janela razoável, critério de encerramento e proteção de margem.
7. **Monitorar depois de editar:** evolução de CTR, CPC, CVR, ROAS, margem e vendas orgânicas; não atribuir a mudança de desempenho a uma ação sem controle mínimo.
8. **Documentar:** hipótese → alteração → datas → resultado → decisão seguinte.

## 5.7. Roteiro específico: as duas meias masculinas Hoahi de 12/10/2026

**Perguntas analíticas prioritárias (não há resposta numérica consolidada):**

1. O anúncio unitário e o kit de 3 pares apresentam **diferentes margens, preços e taxas de conversão**? Qual combinação tem maior lucro real por pedido?
2. Quanto dos períodos de desempenho considerado ruim correspondeu a **pausa por estoque** ou **falta das variações mais procuradas**?
3. Há fotos, títulos, benefício de atoalhamento, listras ou ajuste no cano que estejam **pouco evidentes**, sem criar promessas não comprovadas?
4. A oferta em kit resolve melhor custo de frete/ticket do que a peça avulsa, **sem apenas deslocar vendas** de uma oferta para outra?
5. O problema aparece em **CTR, CPC, CVR, ROAS**, ou principalmente na **margem pós-Ads**?

**Não prescrever pausa definitiva ou novo lance específico** antes de obter amostra mínima, relação entre estoque e veiculação e margem econômica por item.
