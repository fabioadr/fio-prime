---
title: "Reconciliação financeira nos marketplaces"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§10); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Método de conciliação venda/devolução e modelo de dados."
---

# Reconciliação financeira nos marketplaces

> Numeração de seções (`§`) citada no texto refere-se à memória v1.0.0 original (ver `git show f655289:FIO_PRIME_MEMORIA.md`). Siga a legenda de status em `GOVERNANCA.md`.

# 10. Reconciliação e controle financeiro nos marketplaces

## 10.1. Princípio

A movimentação de carteira e o resultado da venda podem ter **datas, identificadores e rubricas diferentes**. Não concluir que houve cobrança indevida apenas por encontrar o débito antes de achar o crédito correspondente.

## 10.2. Caso histórico Mercado Livre (28/07/2026)

O usuário analisava pedido devolvido por desistência, sem prejuízo de reputação, e encontrou o débito de **R$ 35,63** sem identificar o crédito anterior. Queria verificar se o efeito líquido era adequado.

**Procedimento analítico recomendado:**

1. Levantar identificador do pedido, movimentações, liberação de saldo e evento de devolução.
2. Separar **entrada de venda**, **tarifas**, **retenções**, **estornos**, **ajustes logísticos** e **saques/transferências**.
3. Cruzar tudo por pedido e transação, não somente por valor e dia.
4. Registrar saldos antes e depois da devolução, distinguindo valor bruto recebido e líquido liberado.
5. Identificar eventual rubrica não devolvida (se aplicável) antes de concluir irregularidade.
6. Somente então classificar a diferença como conciliada, pendente ou divergente.

## 10.3. Modelo de dados para conciliação

| Campo | Exemplo de conteúdo |
| --- | --- |
| Canal | Mercado Livre ou Shopee |
| Pedido / transação | Identificador real exportado |
| Evento | Venda, tarifa, frete, reembolso, estorno, ajuste, saque |
| Data do pedido / da movimentação | Datas distintas |
| Valor | Com sinal positivo ou negativo, em BRL |
| Base | Bruto, líquido, retenção, provisão |
| Referência cruzada | ID de pedido, devolução, repasse |
| Situação | Conciliado / divergente / pendente |
