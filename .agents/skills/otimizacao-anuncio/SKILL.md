---
name: otimizacao-anuncio
description: Audita e reescreve páginas e anúncios de produto da Fio Prime (Shopee, Mercado Livre, site) — primeira imagem, título, benefícios, objeções, variações, FAQ — e propõe um teste. Use quando o usuário enviar link, print ou texto de anúncio pedindo melhoria, diagnóstico de conversão baixa ou novo título.
metadata:
  versao: "1.1.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Otimização de anúncio / página de produto

> Caminhos são relativos à raiz do repositório.

## Leia antes
- `docs/catalogo/README.md` (lista das fichas por produto) — ficha do SKU exato (composição, tamanho, kit).
- `docs/catalogo/criativos.md` — padrão de imagem e checklist de publicação.
- Canal: `docs/canais/shopee/README.md` e `docs/canais/shopee/regras-de-anuncio.md`, ou `docs/canais/mercado-livre.md`.
- Para escrever a descrição final, use também a skill `redacao-anuncio`.

## Entradas
Link, print ou texto atual; fotos; preço; variações com estoque; avaliações reais (se houver); canal.

## Passos
1. **Identificar o SKU**, o canal e a unidade comercial (kit de 3 pares ou par avulso).
2. **Auditar** nesta ordem: primeira imagem → título → preço/frete visíveis → variações disponíveis → benefícios → objeções respondidas → prova social real → descrição/FAQ.
3. **Comparar com a ficha:** toda afirmação precisa existir em `docs/catalogo/README.md` (lista das fichas por produto). O que não existir vira pergunta, não texto.
4. **Reescrever** título, bullets, descrição e FAQ, respeitando as regras do canal.
5. **Propor um teste** com uma variável por vez (ex.: só a capa). Métrica: CTR para capa e título, CVR para página e preço. Janela e registro: `redacao-anuncio`, `references/titulo.md`, seção Medição.

## Saída
Diagnóstico priorizado (problema → impacto provável → correção), textos prontos, briefing da imagem (via `briefing-imagem-produto`, se necessário) e plano de teste.

## Não faça
- Prometer invisibilidade em qualquer calçado, efeito medicinal, compressão graduada ou outro atributo técnico não documentado.
- Transferir a composição de um SKU para outro.
- Inventar avaliações, depoimentos, urgência ou desconto.

## Quando devolver para uma pessoa
Atributo técnico sem ficha, uso de avaliações de clientes e qualquer alegação nova precisam de confirmação antes de publicar.
