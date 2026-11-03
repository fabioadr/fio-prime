---
name: conciliacao-marketplace
description: Concilia vendas, tarifas, devoluções e repasses de Shopee e Mercado Livre da Fio Prime por pedido, identificando o valor líquido esperado x registrado. Use quando o usuário não entender um débito ou crédito, um repasse, o valor de uma devolução ou uma diferença no extrato do marketplace.
metadata:
  versao: "1.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Conciliação financeira de marketplace

> Caminhos são relativos à raiz do repositório.

## Leia antes
- `operacao/conciliacao-financeira.md` — princípio, caso histórico e modelo de dados.

## Entradas
Extrato ou movimentação da conta, ID do pedido, evento de devolução, tarifas e saldos antes e depois.

## Passos
1. Monte a linha do tempo do pedido: venda → tarifas → retenções → liberação → devolução/estorno → ajustes.
2. Classifique cada lançamento (venda, tarifa, frete, reembolso, estorno, ajuste, saque) com sinal e base (bruto/líquido).
3. Cruze **por pedido e transação**, não só por valor e data.
4. Calcule o líquido esperado x o registrado e a diferença.
5. Classifique: conciliado / pendente / divergente. Só aponte cobrança indevida com transação identificada.

## Saída
Tabela no formato do modelo de dados, cálculo da diferença, conclusão e o que perguntar ao suporte do marketplace (se houver divergência).

## Não faça
- Somar valores de bases diferentes (bruto com líquido).
- Concluir irregularidade antes de achar o crédito correspondente.
