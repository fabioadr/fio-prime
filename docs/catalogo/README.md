---
title: "Catálogo — marcas e regras de dados"
origem: "FIO_PRIME_MEMORIA.md v1.0.0 §3.1 e §3.8"
atualizado_em: "2026-11-03"
resumo: "Marcas, regra de dados por SKU e índice do catálogo."
---

# Catálogo — marcas e regras de dados

> Status de confiança: ver `docs/governanca/status-e-fontes.md`. Referências `§` apontam para a memória v1.0.0 (`git show f655289:FIO_PRIME_MEMORIA.md`).

## 3.1. Marcas presentes no histórico

- **Hoahi:** produtos de meias masculinas esportivas e sapatilhas femininas invisíveis/super invisíveis.
- **Rafa Parize:** produtos de meias soquete femininas, inclusive estoque lento.
- **Altomax:** fornecedor mencionado em compras da Fio Prime; segundo o relato de 24/09/2026, fabrica no **Paraguai** e introduz produtos no Brasil. O usuário compra da Altomax em operação documentada por NF-e. **Não concluir daí que a Fio Prime já seja importadora direta desses itens.**

**Marcas hoje (relato do Fábio, 03/11/2026):** a Fio Prime vende só produtos de terceiros, e apenas os produzidos pela Altomax: Altomax, Hoahi, Rafa Parize, Polo Wear, Reebok, entre outras. Polo Wear e Reebok ainda não têm ficha nesta base. **Toda a produção da Altomax vem da mesma fábrica no Paraguai** (relato do Fábio, 03/11/2026; não implica origem fiscal ou NCM).

**Linha Altomax Fitness Canelado** (top, bermuda, legging, macacão; 03/11/2026): ver [`altomax-fitness-canelado.md`](altomax-fitness-canelado.md) e [`skus-altomax-fitness-canelado.md`](skus-altomax-fitness-canelado.md).

**A VALIDAR:** fabricante/importador efetivo por SKU, marcas adicionais, vinculação entre Altomax e cada item comercializado, códigos EAN/GTIN, NCM, composição e custo.

## 3.8. Regra para dados de produtos

Atributos são específicos de **produto/SKU**, não transferíveis automaticamente entre linhas, kits, tamanhos ou marcas. Na ausência de ficha técnica ou NF-e, registrar `desconhecido`. Não deduzir margem, origem fiscal, peso, embalagem ou código tributário pelo nome comercial.

## Arquivos do catálogo
| Arquivo | Conteúdo |
| --- | --- |
| [`desempenho-portfolio.md`](desempenho-portfolio.md) | Campeões de venda e estoque lento (retrato de 09/08/2026) |
| [`precificacao-e-giro.md`](precificacao-e-giro.md) | Campeões x giro lento; modelo de margem unitária |
| [`criativos.md`](criativos.md) | Padrão de fotografia, copy e vídeo; checklist de publicação |
| [`fichas/sapatilha-super-invisivel-hoahi-33-38.md`](fichas/sapatilha-super-invisivel-hoahi-33-38.md) | Ficha: kit 3 pares sapatilha super invisível Hoahi 33–38 |
| [`fichas/meia-masculina-cano-longo-hoahi.md`](fichas/meia-masculina-cano-longo-hoahi.md) | Ficha: meia masculina esportiva cano longo (Hoahi) |
| [`fichas/soquete-branca-confortavel-rafa-parize-33-38.md`](fichas/soquete-branca-confortavel-rafa-parize-33-38.md) | Ficha: kit 3 pares soquete branca confortável Rafa Parize 33–38 |
| [`altomax-fitness-canelado.md`](altomax-fitness-canelado.md) | Linha Altomax Fitness Canelado: atributos comuns, refs por cor, divergência catálogo x etiqueta |
| [`skus-altomax-fitness-canelado.md`](skus-altomax-fitness-canelado.md) | SKUs e GTIN/EAN (M, G, GG) da linha Altomax Fitness Canelado |
| [`altomax-fitness-para-anuncios.md`](altomax-fitness-para-anuncios.md) | Fitness Altomax: o que usar em título, descrição e foto; limites e lacunas |
| [`termos-de-busca-fitness.md`](termos-de-busca-fitness.md) | Termos de busca da linha fitness, com fontes e limites |
| [`fichas/altomax-fitness-canelado-top.md`](fichas/altomax-fitness-canelado-top.md) | Ficha: top canelado Altomax |
| [`fichas/altomax-fitness-canelado-bermuda.md`](fichas/altomax-fitness-canelado-bermuda.md) | Ficha: bermuda canelada Altomax |
| [`fichas/altomax-fitness-canelado-legging.md`](fichas/altomax-fitness-canelado-legging.md) | Ficha: legging canelada Altomax |
| [`fichas/altomax-fitness-canelado-macacao.md`](fichas/altomax-fitness-canelado-macacao.md) | Ficha: macacão canelado Altomax |

Nova ficha: crie `fichas/<produto>.md` com a origem da informação; campos desconhecidos ficam `desconhecido`.
