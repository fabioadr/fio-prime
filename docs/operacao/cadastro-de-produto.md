---
title: "Integridade cadastral de produto"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §8.3"
atualizado_em: "2026-11-03"
resumo: "Campos de referência do cadastro de produto e código citado."
---

# Integridade cadastral de produto

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

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
