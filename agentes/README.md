# agentes/

Perfis de **papel** (quem atua, com que escopo e com quais skills). São Markdown simples e funcionam em qualquer LLM ou ferramenta.

**Como ativar:** diga "atue como `<agente>`" ou "use o agente `<agente>`". A LLM lê `agentes/<agente>.md` e segue o escopo, as regras e as skills listadas. Em ferramentas com subagentes, o arquivo pode ser usado como prompt do subagente; em chats, basta pedir.

| Agente | Papel | Skills principais |
| --- | --- | --- |
| [`estrategista-comercial`](estrategista-comercial.md) | Ads, preço, margem, giro, canais | analise-shopee-ads, giro-estoque-lento, otimizacao-anuncio |
| [`criativos`](criativos.md) | Textos de anúncio, imagens e vídeos | redacao-anuncio, briefing-imagem-produto, roteiro-video-produto |
| [`atendimento-ana`](atendimento-ana.md) | Mensagens a compradores | atendimento-cliente |
| [`operacoes`](operacoes.md) | Estoque, Bling, cadastro, conciliação | conciliacao-marketplace |
| [`fiscal-documental`](fiscal-documental.md) | Dossiês fiscais e societários para o contador | preparacao-fiscal |
| [`curador-base`](curador-base.md) | Manter a base, revisar contribuições | registro-conhecimento, revisao-final |

Todos seguem `AGENTS.md` e `GOVERNANCA.md`. Ao terminar, todos aplicam a skill `revisao-final`.

## Modelo para um agente novo
```markdown
---
name: nome-do-agente
description: Papel em uma frase e quando acionar.
skills: [skill-a, skill-b]
leitura_base: [arquivo/tema.md]
---
# <Nome>
## Missão
## Escopo / Fora do escopo
## Regras específicas
## Entregáveis
## Quando devolver para um humano
```
