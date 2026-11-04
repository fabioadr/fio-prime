---
title: "Registro de decisões e experimentos"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§15.1 e §15.2); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Modelos de registro + log (vazio) de decisões e experimentos aprovados."
---

# Registro de decisões e experimentos

> Adicione abaixo, mais recentes no topo. Proposta ≠ decisão: só registre como `aprovado` com confirmação do usuário.

## Log

```yaml
decisao_id: "FP-DEC-2026-001"
data: "2026-11-03"
area: "catalogo"
problema: "Material da Altomax diverge entre catálogo e etiquetas: composição de top, bermuda e legging; referência do macacão cinza no índice; grafia 'm' no tamanho GG"
evidencia: "Catálogo Altomax Fitness 2026 (PDF), fotos das etiquetas, resposta do Fábio em 03/11/2026"
opcoes_avaliadas: ["seguir o catálogo", "seguir a etiqueta", "pedir confirmação escrita à Altomax"]
decisao_aprovada: "Composição: seguir a etiqueta. Referência: vale a página do produto, não o índice. 'm' no GG é erro de grafia: é cm. Ordem geral: etiqueta, página do catálogo, índice."
responsavel: "Fábio"
status: "aprovado"
fonte_interna: "conversa de 03/11/2026; docs/catalogo/altomax-fitness-canelado.md"
```

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
