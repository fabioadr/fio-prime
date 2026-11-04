---
title: "Modelos de decisão e experimento"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§15.1 e §15.2); separado de decisoes.md em 03/11/2026"
atualizado_em: "2026-11-03"
resumo: "Estruturas mínimas para registrar decisões e experimentos."
---

# Modelos de decisão e experimento

Registre em [`decisoes.md`](decisoes.md), mais recentes no topo.

## 15.1. Estrutura mínima de um registro de decisão

```yaml
decisao_id: "FP-DEC-AAAA-NNN"
data: "AAAA-MM-DD"
area: "ads|catalogo|atendimento|estoque|fiscal|marketplace|criativo"
problema: ""
evidencia: ""
opcoes_avaliadas: []
decisao_aprovada: null
responsavel: null
status: "proposto" # proposto | aprovado | em-execucao | concluido | revertido
indicador_primario: null
linha_de_base: null
meta: null
data_de_revisao: null
resultado_observado: null
fonte_interna: "conversa/arquivo dentro do projeto"
```

## 15.2. Estrutura mínima de um experimento comercial

```yaml
experimento_id: "FP-EXP-AAAA-NNN"
canal: "Shopee"
objeto: "sku-ou-anuncio"
hipotese: ""
variavel_alterada: ""
segmento_ou_condicao_de_controle: ""
data_inicio: null
data_fim: null
estoque_adequado: null
indicadores: ["CTR", "CVR", "ROAS", "contribuicao_pos_ads"]
criterio_sucesso: ""
criterio_parada: ""
resultado: null
decisao: null
```
