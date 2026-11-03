# comandos/

Atalhos que qualquer pessoa pode digitar em qualquer LLM. **Convenção:** quando a mensagem começa com `/<nome>`, a LLM abre `comandos/<nome>.md` e executa o que está descrito, usando o restante da mensagem como argumento. Isso funciona porque `AGENTS.md` e `INSTRUCOES_PROJETO_FIO_PRIME.md` instruem a LLM a fazê-lo. Não depende de um recurso nativo de nenhuma ferramenta.

Se a ferramenta interceptar a `/` (algumas usam para recursos próprios), use o **prompt equivalente** que está em cada arquivo, ou escreva "comando diagnostico-ads: ...".

| Comando | O que faz | Skill |
| --- | --- | --- |
| [`/diagnostico-ads`](diagnostico-ads.md) | Diagnostica anúncios de Shopee Ads com foco em lucro após mídia. | `analise-shopee-ads` |
| [`/otimizar-anuncio`](otimizar-anuncio.md) | Audita uma página/anúncio e propõe melhorias e teste. | `otimizacao-anuncio` |
| [`/descricao-anuncio`](descricao-anuncio.md) | Escreve título e descrição prontos para colar. | `redacao-anuncio` |
| [`/briefing-imagem`](briefing-imagem.md) | Gera briefing/prompt de imagem fiel ao produto, ou revisa uma imagem. | `briefing-imagem-produto` |
| [`/roteiro-video`](roteiro-video.md) | Cria roteiro de vídeo curto de produto. | `roteiro-video-produto` |
| [`/responder-cliente`](responder-cliente.md) | Responde um comprador como Ana da Fio Prime. | `atendimento-cliente` |
| [`/plano-giro`](plano-giro.md) | Planeja o giro de estoque parado sem prejuízo. | `giro-estoque-lento` |
| [`/conciliar`](conciliar.md) | Concilia uma venda/devolução/repasse de marketplace. | `conciliacao-marketplace` |
| [`/dossie-fiscal`](dossie-fiscal.md) | Organiza dossiê e perguntas para o contador. | `preparacao-fiscal` |
| [`/registrar`](registrar.md) | Registra fato, decisão ou experimento na base. | `registro-conhecimento` |
| [`/revisar`](revisar.md) | Revisa uma entrega antes de enviar. | `revisao-final` |

## Criar um comando novo
Copie um arquivo existente, ajuste o frontmatter (`name`, `description`, `skill`, `agente`, `argumentos`) e o prompt, depois adicione o comando nesta tabela e em `AGENTS.md`. Um comando não contém regras próprias: ele só aponta para um agente e uma skill.
