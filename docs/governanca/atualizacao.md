---
title: "Regra de atualização da base"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §15.4"
atualizado_em: "2026-11-03"
resumo: "Como adicionar e substituir fatos."
---

# Regra de atualização da base

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

## 15.4. Regra de atualização

Ao adicionar um fato:

1. Registrar **data do fato** e **data de inclusão**.
2. Citar **conversa ou arquivo do projeto**, sem incorporar contexto alheio.
3. Atribuir status e **grau de confiança**; manter valores históricos datados.
4. Distinguir nova instrução de registro factual e de experimento.
5. Se o dado substitui algo anterior, marcar o anterior como histórico sem apagá-lo da cronologia.
6. Nunca fazer commit de credenciais, tokens, e-CNPJ, dados pessoais de clientes, XMLs integrais ou relatórios sensíveis em repositório público.
7. Atualizar a versão: `PATCH` para correção, `MINOR` para nova seção/dados, `MAJOR` para mudança estrutural ou nas regras de interpretação.
