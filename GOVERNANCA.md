---
title: "Governança da base de conhecimento"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 (§0, §14, §15.4 e §16); commit f655289"
atualizado_em: "2026-11-03"
resumo: "Legenda de status, hierarquia de conflitos, glossário, regra de atualização e autoverificação."
---

# Governança da base de conhecimento

> Numeração de seções (`§`) citada no texto refere-se à memória v1.0.0 original (ver `git show f655289:FIO_PRIME_MEMORIA.md`). Siga a legenda de status em `GOVERNANCA.md`.

# 0. Instruções de uso por qualquer LLM

1. Leia esta memória antes de responder a questões complexas relacionadas à Fio Prime.
2. Respeite os **estados de confiança** e as **datas de referência**. Os fatos sobre operação podem envelhecer; as fórmulas e critérios analíticos são orientações metodológicas, não dados da empresa.
3. Nunca utilizar memórias ou contexto de outros negócios e projetos como se pertencessem à Fio Prime.
4. Se o usuário trouxer dados atuais que contradigam este arquivo, priorize os dados atuais, aponte o que mudou e proponha alteração deste Markdown.
5. Não afirmar que uma proposta foi executada, nem atribuir resultado financeiro a teste que ainda não foi medido.
6. Quando uma tarefa exigir dados ausentes, fazer o melhor com o disponível e indicar precisamente quais dados faltam e por quê; solicitar apenas o mínimo indispensável.
7. Em análises envolvendo legislação, cobranças de plataformas, regras fiscais ou técnicas sujeitas a mudança, declarar data de validade e consultar documentação atual somente quando o usuário permitir acesso externo.
8. Exibir cálculos reproduzíveis, unidades, fórmulas e hipóteses. Distinguir receita bruta, receita atribuída ao anúncio, receita líquida, margem antes do anúncio e lucro após mídia.
9. Em textos comerciais, utilizar informações comprovadas sobre os produtos. Nunca prometer características não verificadas, desempenho médico ou aparência invisível em qualquer calçado.
10. Preferir resposta em português do Brasil, organizada para decisão e execução. Para documentos extensos, usar Markdown editável e versionável.

## 0.1. Legenda de status

| Marcador | Significado | Como utilizar |
| --- | --- | --- |
| **CONFIRMADO NO PROJETO** | Informação declarada diretamente pelo usuário ou presente em descrição fornecida por ele. | Pode servir de contexto, sem extrapolar além do relato. |
| **RELATO DATADO** | Retrato de uma operação, valor ou resultado numa data específica. | Não tratar como permanente. |
| **PEDIDO/PLANO** | Intenção, proposta, pesquisa ou ação solicitada. | Não transformar automaticamente em implantação concluída. |
| **A VALIDAR** | Dado ausente, incompleto, contraditório ou que depende de documento/cenário atual. | Solicitar evidência apropriada antes de concluir. |
| **CRITÉRIO RECOMENDADO** | Boa prática operacional ou fórmula proposta nesta documentação. | Não apresentar como política já aprovada pela empresa. |

## 0.2. Hierarquia para resolver conflitos

1. Correção ou instrução explícita mais recente do usuário **dentro do projeto**.
2. Documento operativo atual anexado ao projeto e verificável (planilha, NF-e, relatório, exportação, screenshot).
3. Conversas anteriores do próprio projeto, considerando suas datas.
4. Esta memória consolidada.
5. Hipóteses analíticas claramente rotuladas.

Fontes externas **não** devem ser misturadas silenciosamente com os fatos internos. Se consultadas no futuro por autorização do usuário, devem ter origem e data.

# 14. Glossário específico e decisões de interpretação

| Termo | Uso neste projeto |
| --- | --- |
| **Kit 3 pares** | Unidade comercial com três pares; **não** confundir com uma única meia ou um par avulso. |
| **Super invisível** | Linha de sapatilha mais discreta; a invisibilidade efetiva depende também do calçado. |
| **Invisível** | Outra linha comercial, distinta de **super invisível**; não fundir SKUs. |
| **Soquete** | Modelo de meia com cano baixo; não é sinônimo exato de sapatilha super invisível. |
| **Atoalhada** | Característica de construção em regiões especificadas; verificar cada ficha. |
| **Compressão no cano** | Descrição do produto masculino citado; sem evidência de classe terapêutica. |
| **ROAS** | Receita atribuída aos anúncios ÷ gasto com anúncios, sob definição de atribuição da plataforma. |
| **ACoS** | Gasto com anúncios ÷ receita atribuída aos anúncios. |
| **TACoS** | Gasto com anúncios ÷ vendas totais do recorte analisado. |
| **CMV** | Custo da mercadoria vendida, com metodologia contábil e composição a validar. |
| **Ruptura** | Indisponibilidade de estoque que pode reduzir variações, limitar vendas ou interromper anúncios. |
| **Bling** | Sistema citado para cadastro e sincronização de estoque/marketplaces. |
| **Recomposição de ICMS** | Expressão usada no relato fiscal; exige caracterizar operação e base normativa antes de concluir. |
| **Ana da Fio Prime** | Persona escolhida para mensagens de atendimento ao cliente. |

## 15.4. Regra de atualização

Ao adicionar um fato:

1. Registrar **data do fato** e **data de inclusão**.
2. Citar **conversa ou arquivo do projeto**, sem incorporar contexto alheio.
3. Atribuir status e **grau de confiança**; manter valores históricos datados.
4. Distinguir nova instrução de registro factual e de experimento.
5. Se o dado substitui algo anterior, marcar o anterior como histórico sem apagá-lo da cronologia.
6. Nunca fazer commit de credenciais, tokens, e-CNPJ, dados pessoais de clientes, XMLs integrais ou relatórios sensíveis em repositório público.
7. Atualizar a versão: `PATCH` para correção, `MINOR` para nova seção/dados, `MAJOR` para mudança estrutural ou nas regras de interpretação.

# 16. Autoverificação para respostas futuras

Antes de concluir uma tarefa, a LLM deve checar:

- [ ] Meu contexto foi obtido **somente da Fio Prime**, sem fatos herdados de outros projetos?
- [ ] Separei os **fatos históricos** das condições atuais não verificadas?
- [ ] Não transformei **hipóteses e propostas** em decisões concluídas?
- [ ] Não confundi **pares, kits, variações e SKUs**?
- [ ] Se analisei anúncios, corrigi a leitura por **pausa/ruptura de estoque**?
- [ ] Se avaliei ROAS, considerei **margem pré-mídia** e base de receita compatível?
- [ ] Se escrevi mensagem, a **Ana da Fio Prime** se apresentou e a mensagem segue as regras do canal?
- [ ] Se produzi criativo, preservei **identidade visual real do produto** e não inventei atributos?
- [ ] Se tratei de fiscal/importação, marquei os **dados e validações legais pendentes**?
- [ ] Se citei quantidades, impostos ou taxas, deixei clara a **data de referência**?
- [ ] Entreguei uma decisão, plano ou artefato efetivamente útil para a tarefa solicitada?
