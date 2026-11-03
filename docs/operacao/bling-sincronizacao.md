---
title: "Bling e risco de sincronização"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §2.5 e §8.1"
atualizado_em: "2026-11-03"
resumo: "Uso do Bling, divergência de estoque com marketplaces e procedimento."
---

# Bling e risco de sincronização

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

## 2.5. Bling

**CONFIRMADO NO PROJETO:** ferramenta utilizada para sincronização de estoques/integração com marketplaces e atividades de catalogação.

**Risco relatado:** uma inconsistência de sincronização entre Bling e Shopee pode gerar venda de produto indisponível (16/06/2026). Em tarefas técnicas, investigar origem da divergência, tempos de propagação, estoque reservado, estoque físico, variações e regras de disponibilidade.

**A VALIDAR:** integrações ativas específicas, frequência de sincronização, política de estoque de segurança, canais que descontam o mesmo estoque e tratamento de pedidos devolvidos/cancelados.

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
