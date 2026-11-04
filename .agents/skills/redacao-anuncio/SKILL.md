---
name: redacao-anuncio
description: Escreve títulos e descrições de anúncio da Fio Prime prontos para colar, só com atributos comprovados do SKU, termos de busca reais e os dados obrigatórios de produto têxtil. Antes da versão final, levanta o que falta e pergunta. Use quando pedirem título, descrição, bullets ou texto de anúncio para Shopee, Mercado Livre, Amazon ou site.
metadata:
  versao: "2.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Redação de anúncio

> Caminhos são relativos à raiz do repositório.

## Leia antes
- `docs/catalogo/README.md`: a ficha do SKU exato. Linha fitness: também `docs/catalogo/altomax-fitness-para-anuncios.md`.
- Regras do canal: `docs/canais/shopee/regras-de-anuncio.md` ou `docs/canais/mercado-livre.md`. Verifique a data: regras mudam.
- Roupa: `docs/operacao/anuncio-textil-dados-obrigatorios.md`.
- Nota fiscal, envio, troca e garantia: `docs/operacao/condicoes-comerciais.md`.
- Método, nesta pasta: [`references/evidencia.md`](references/evidencia.md), [`references/titulo.md`](references/titulo.md) e [`references/descricao.md`](references/descricao.md).

## Entradas
SKU ou linha-mãe, canais, variações com estoque, condições comerciais confirmadas (nota fiscal, envio, troca, garantia) e termos de busca. Se a ficha não existir, peça a ficha ou a etiqueta.

## Passos
1. **Escopo:** confirme produto, canais e unidade comercial (peça avulsa, par ou kit).
2. **Ficha de fatos:** classifique cada afirmação por nível de evidência (`references/evidencia.md`).
3. **Termos de busca:** defina o termo principal e os sinônimos com dados reais: sugestões da busca do canal, ferramenta de palavras-chave do canal ou prints do usuário. Pesquisa externa só com autorização (`AGENTS.md`); nunca resolva captcha nem faça login no lugar do usuário. Sem dados, o termo é hipótese e deve ser marcado assim. Registre o que for útil em `docs/catalogo/` (exemplo: `termos-de-busca-fitness.md`).
4. **Pendências, antes de escrever a versão final:** liste o que falta, separando o que bloqueia do que só limita o texto, e **pergunte ao usuário**. Peça só o mínimo. Dúvida sem resposta vira omissão, nunca suposição.
5. **Título:** escreva por canal (`references/titulo.md`) e conte os caracteres com uma ferramenta, não de cabeça.
6. **Descrição:** siga a ordem fixa (`references/descricao.md`).
7. **Revisão:** rastreie cada afirmação até a fonte, confira se título, ficha, fotos e descrição dizem o mesmo e aplique a skill `revisao-final`.
8. **Medição:** proponha o que acompanhar após publicar (`references/titulo.md`, seção Medição).

## Saída
1. Título e descrição de cada canal, em blocos de código separados, para colar sem formatação acidental.
2. Quadro curto: afirmação → fonte → nível de evidência.
3. Campos que precisam acompanhar o texto no anúncio: ficha do marketplace, tabela de medidas e foto da etiqueta.
4. Pendências que restarem e o que acompanhar depois de publicar.

## Não faça
- Emojis ou formatação na descrição da Shopee.
- Atributos, garantias, prazos ou cupons não confirmados.
- Transferir atributos entre SKUs, peças, tamanhos ou marcas.
- Copiar promessas de concorrentes sem evidência no produto.
- Termos como "invisível em qualquer sapato", "terapêutica", "melhora a circulação", "modeladora" ou "empina bumbum".
- Converter medidas em numeração (38, 40, 42) sem prova no corpo.

## Quando devolver para uma pessoa
Atributo sem ficha, alegação nova, condição comercial, conflito entre fontes e publicação: pergunte antes. A LLM redige; a pessoa aprova.
