---
name: briefing-imagem-produto
description: Cria briefings, prompts e critérios de aceite para fotografar, gerar ou editar imagens de meias da Fio Prime preservando fielmente o produto (listras, cor, trama, proporções). Use quando pedirem foto de produto, edição de imagem, capa de anúncio, prompt para gerador de imagem ou revisão de uma imagem pronta.
metadata:
  versao: "1.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Briefing e revisão de imagem de produto

> Caminhos são relativos à raiz do repositório. Esta skill funciona com qualquer gerador ou editor de imagem: ela produz instruções e critérios, não depende de uma ferramenta.

## Leia antes
- `catalogo/fotografia-e-criativos.md` — padrão obrigatório (§6.1) e checklist (§6.3).
- `catalogo/produtos.md` — ficha do SKU.

## Entradas
Imagem original (se for edição), SKU, mudança autorizada, canal de destino e proporção/resolução exigidas (se não informadas: marcar **A VALIDAR**, não inventar).

## Padrão obrigatório
- A meia é a protagonista; o enquadramento fica semelhante ao original, salvo autorização.
- Listras, cor, textura, calcanhar, cano e proporções **idênticos** ao produto real.
- Estética premium, limpa e realista; iluminação profissional de e-commerce.
- Tênis ou calçado neutro, **sem logomarca**; ambiente sem marcas de terceiros.

## Passos
1. Descreva o produto real de forma objetiva (cores, posição das listras, construção).
2. Escreva o briefing ou prompt: cena, luz, enquadramento, proporção, o que **não** pode mudar.
3. Inclua as restrições negativas (sem logos, sem alterar listras, sem mudar a cor da malha).
4. Ao revisar uma imagem pronta, compare original e resultado item a item: listras, cor, proporções, malha, calcanhar, cano, quantidade de pares, logos.

## Saída
Briefing/prompt pronto + checklist de aceite. Na revisão: aprovado / reprovado, com a lista de divergências.

## Não faça
- Alterar o produto para "parecer mais vendável".
- Inserir textos de benefício não comprovados na arte.
