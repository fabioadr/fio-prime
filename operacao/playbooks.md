---
title: "Playbooks de tarefas recorrentes"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§11); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Entrada, saída e critério de aceite por tipo de tarefa."
---

# Playbooks de tarefas recorrentes

> Numeração de seções (`§`) citada no texto refere-se à memória v1.0.0 original (ver `git show f655289:FIO_PRIME_MEMORIA.md`). Siga a legenda de status em `GOVERNANCA.md`.

# 11. Playbooks práticos para tarefas recorrentes

## 11.1. Análise de Shopee Ads

**Entrada:** relatórios por anúncio e período; custo e receita; informação sobre pausas e estoque.

**Saída esperada:**

1. Resumo executivo de rentabilidade, com data e escopo.
2. Ranking de oportunidades por **impacto econômico estimado** e confiança.
3. Tabela de campanhas/anúncios distinguindo gasto, vendas atribuídas, ROAS, ACoS, CTR, CPC, CVR, margem e estoques.
4. Hipótese de causa para cada problema, com evidência e alternativa de interpretação.
5. Plano de mudanças com prioridade (alta/média/baixa), risco, hipótese, teste, métrica-alvo e critério de interrupção.
6. Registro das lacunas e próximos dados necessários.

**Guardrails:** não inferir ruptura por ausência de dados; não sugerir aumentar gasto em produto com margem desconhecida; não confundir desempenho de kit e unidade.

## 11.2. Otimização de página / anúncio de produto

**Entrada:** link/screenshot/descrição, fotos, composição, preço, estoque e avaliações reais.

**Saída:** diagnóstico de primeira imagem, título, promessa, benefícios, objeções, diferenciais, provas, variações, FAQ, copy reformulada e plano de teste.

**Critérios:** precisão sobre 3 pares versus peça avulsa, cor, tamanho, composição e atoalhamento. Não superestimar características ou compatibilidade com calçados.

## 11.3. Criação e edição de imagens

**Entrada:** imagem original, produto/SKU, mudança autorizada, canal e proporção requerida.

**Saída:** edição que mantenha o produto fiel, protagonismo da meia, aparência premium, iluminação realista, cenário e tênis neutros sem logos.

**Critério de aceite:** comparar original e final nas listras, cor, proporções, malha, calcanhar e cano; a alteração visual não pode transformar o produto em outro.

## 11.4. Atendimento a clientes

**Entrada:** mensagem do cliente, produto, canal, disponibilidade e política pertinente.

**Saída:** texto curto, pronto para enviar, assinado/apresentado por **Ana da Fio Prime**, com solução, esclarecimento e uma possível próxima ação comercial apropriada.

**Critério de aceite:** sem jargão, culpa, informação inventada, oferta não aprovada ou indução ao cancelamento de pedido Shopee.

## 11.5. Giro de estoque lento

**Entrada:** estoque real, idade do estoque, preço/custo, devoluções, margem, tráfego e vendas por canal.

**Saída:** priorização de ações (melhoria de listagem, criativos, teste de desconto, combos, distribuição de tráfego), com cenário de contribuição e estimativa de consumo de estoque. Identificar possível efeito nas vendas dos produtos campeões.

**Critério de aceite:** resolver capital parado sem criar prejuízo oculto ou risco de ruptura dos campeões.

## 11.6. Análise tributária e importação

**Entrada:** contrato/CNAEs, XMLs, regime atual, faturamento, mix, origem/destino, projeção e formato de importação pretendido.

**Saída:** mapa dos regimes e obrigações possivelmente relevantes, simulações condicionais transparentes, documentos faltantes, riscos, perguntas para o contador e plano de regularização.

**Critério de aceite:** separar informação comprovada, hipótese legal e interpretação profissional; não agir sobre benefício ou alíquota sem confirmação vigente.

## 11.7. Reconciliação de venda/devolução

**Entrada:** extrato da conta do marketplace, movimento de carteira, pedido, devolução, taxas e saldo.

**Saída:** linha do tempo com créditos/débitos, valor líquido esperado, valor registrado, diferença e origem provável.

**Critério de aceite:** toda conclusão deve apontar transações identificáveis e evitar somar valores com bases distintas.
