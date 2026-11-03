---
title: "Bling, estoque e cadastros"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§2.5 e §8); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Risco de sincronização Bling x marketplaces, estoque por variação, campos cadastrais."
---

# Bling, estoque e cadastros

> Numeração de seções (`§`) citada no texto refere-se à memória v1.0.0 original (ver `git show f655289:FIO_PRIME_MEMORIA.md`). Siga a legenda de status em `GOVERNANCA.md`.

## 2.5. Bling

**CONFIRMADO NO PROJETO:** ferramenta utilizada para sincronização de estoques/integração com marketplaces e atividades de catalogação.

**Risco relatado:** uma inconsistência de sincronização entre Bling e Shopee pode gerar venda de produto indisponível (16/06/2026). Em tarefas técnicas, investigar origem da divergência, tempos de propagação, estoque reservado, estoque físico, variações e regras de disponibilidade.

**A VALIDAR:** integrações ativas específicas, frequência de sincronização, política de estoque de segurança, canais que descontam o mesmo estoque e tratamento de pedidos devolvidos/cancelados.

# 8. Estoque, cadastros e continuidade operacional

## 8.1. Risco de sincronização

O projeto registra falha esporádica em que **Bling informou disponibilidade incorreta à Shopee**, resultando em pedidos de produtos sem estoque (16/06/2026).

**Procedimento recomendado:**

1. Identificar SKU/variação e canal do pedido.
2. Conferir saldo físico, reservado, disponível no Bling e publicado no marketplace.
3. Investigar a origem: atraso de sincronização, mapeamento duplicado, reserva, kit composto ou intervenção manual.
4. Corrigir disponibilidade na origem e auditar anúncios afetados.
5. Revisar estoque de segurança para itens de maior giro, conforme capacidade real.
6. Registrar frequência, impacto na satisfação e eventual penalização.

**Não confirmado:** que o problema seja frequente, qual seja a causa raiz ou que já haja rotina formal de reconciliação.

## 8.2. Estoque para anúncios

- Acompanhar **saldo por variação** e não somente pelo produto principal.
- Sinalizar quando as opções líderes ficam indisponíveis, ainda que sobrem variações secundárias.
- Registrar data de ruptura, data de reabastecimento e data de pausa/reativação de anúncios.
- Separar decisão de pausar mídia por rentabilidade da pausa por falta de estoque.
- Controlar kits de 3 pares com atenção ao estoque físico real e à composição de cada kit.

## 8.3. Integridade cadastral

**Um código de produto mencionado no histórico:** `004HOWT23283`, exibido durante discussão de cadastro fiscal/mercadoria em 24/09/2026. A descrição e o enquadramento fiscal completos **não estão disponíveis** nesta memória; não deduzir dados técnicos apenas pelo código.

**Campos de referência recomendados:**

```yaml
sku: null
nome_comercial: null
marca: null
fornecedor: null
origem_fiscal: null # confirmar com XML/contador
ncm: null # confirmar com XML/contador
cest: null # quando aplicável
cfop_por_operacao: null
csosn_por_operacao: null
composicao: null
tamanho: null
cor: null
quantidade_pares_por_kit: null
peso: null
ean_gtin: null
custo_unitario_total: null
preco_por_canal: {}
est_outros_canais: null
estoque_fisico: null
estoque_disponivel: null
atualizado_em: null
```

Valores `null` representam **dado a validar** — não autorizam preenchimento especulativo.
