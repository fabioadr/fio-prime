---
title: "Registro de decisões e experimentos"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§15.1 e §15.2); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Modelos de registro + log (vazio) de decisões e experimentos aprovados."
---

# Registro de decisões e experimentos

> Nenhuma decisão ou experimento foi registrado ainda. Adicione abaixo, mais recentes no topo. Proposta ≠ decisão: só registre como `aprovado` com confirmação do usuário.

## Log

_(vazio)_

## Modelos

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
