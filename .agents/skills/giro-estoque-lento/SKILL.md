---
name: giro-estoque-lento
description: Planeja ações para girar estoque parado da Fio Prime (ex.: kits soquete Rafa Parize) sem gerar prejuízo nem ruptura dos produtos campeões. Use quando o assunto for estoque encalhado, capital parado, liquidação, combo, kit, desconto para girar ou aproveitar o tráfego dos campeões.
metadata:
  versao: "1.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Giro de estoque lento

> Caminhos são relativos à raiz do repositório.

## Leia antes
- `docs/catalogo/precificacao-e-giro.md` — campeões x lentos e modelo de margem.
- `docs/catalogo/desempenho-portfolio.md` — campeões e estoques lentos (relato de 09/08/2026; **confirme o saldo atual**).
- `docs/operacao/bling-sincronizacao.md` e `docs/operacao/estoque-para-anuncios.md` — risco de ruptura.

## Entradas
Estoque atual por SKU/variação, idade do estoque, custo, preço por canal, tarifas, vendas e tráfego por canal, devoluções.

## Passos
1. **Diagnosticar a causa do giro lento:** falta de tráfego, CTR baixo, conversão baixa, preço, prova social ou aderência ao público. Cada causa pede uma ação diferente.
2. **Calcular o piso:** contribuição por kit em cada cenário de preço/desconto. Sem custo real, mostrar fórmulas e cenários marcados como HIPOTÉTICO.
3. **Listar ações por ordem de custo:** melhorar listagem/criativo → redistribuir tráfego → combo ou complemento com campeão (se a regra do canal permitir) → desconto controlado.
4. **Estimar** o consumo de estoque e a contribuição por ação; checar o efeito sobre os campeões (canibalização, ruptura).
5. **Definir teste, prazo e critério de parada;** registrar em `docs/historico/decisoes.md` se aprovado.

## Saída
Diagnóstico, tabela de ações (ação | hipótese | custo | contribuição estimada | risco | métrica), plano de 2–4 semanas e dados faltantes.

## Não faça
- Subsidiar o giro com desconto que transforme a venda em prejuízo oculto.
- Usar "quase 100 unidades" como saldo atual.
- Presumir que a Shopee ou outro canal permite determinado combo sem verificar.

## Quando devolver para uma pessoa
Descontos, mudanças de preço e combos novos precisam de aprovação do responsável antes de serem publicados.
