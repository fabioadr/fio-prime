---
title: "Registro de decisões e experimentos"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§15.1 e §15.2); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Log de decisões e experimentos."
---

# Registro de decisões e experimentos

> Adicione abaixo, mais recentes no topo. Proposta ≠ decisão: só registre como `aprovado` com confirmação do usuário.

## Log

```yaml
decisao_id: "FP-DEC-2026-003"
data: "2026-11-03"
area: "criativo"
problema: "A versão 2.0.0 removeu agentes por falta de padrão comum, mas o Fábio precisa de handoff para agentes especializados"
evidencia: "Pedido do Fábio em 03/11/2026; pesquisa: subagentes têm formato parecido, porém caminhos diferentes em cada ferramenta"
opcoes_avaliadas: ["só skills", "pasta de uma ferramenta", "fonte em .agents/agents com cópias geradas"]
decisao_aprovada: "Ter agentes no repositório. Formato proposto: fonte em .agents/agents com cópias geradas; aguarda aprovação no merge."
responsavel: "Fábio"
status: "proposto"
fonte_interna: "conversa de 03/11/2026; .agents/agents/README.md"
```

```yaml
decisao_id: "FP-DEC-2026-002"
data: "2026-11-03"
area: "marketplace"
problema: "Definir condições comerciais e dados de identificação no texto dos anúncios"
evidencia: "Respostas do Fábio em 03/11/2026; guia Abit e Ipem-SP; CDC arts. 26 e 49"
decisao_aprovada: "Nota fiscal sempre; envio imediato; trocas conforme as regras da plataforma; não citar garantia. No texto, identificar só a marca, sem CNPJ. Shopee é o primeiro canal da linha fitness; os demais vêm depois."
responsavel: "Fábio"
status: "aprovado"
fonte_interna: "conversa de 03/11/2026; docs/operacao/condicoes-comerciais.md"
```

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

Modelos de registro: [`decisoes-modelos.md`](decisoes-modelos.md).
