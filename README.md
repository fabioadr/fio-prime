# Fio Prime — base de conhecimento para LLMs

Repositório compartilhado da equipe da Fio Prime. Reúne o que qualquer LLM (Claude, ChatGPT, Gemini, Copilot ou outra) precisa saber para trabalhar na empresa, e o que cada pessoa da equipe precisa para trabalhar junto. **Nada aqui depende de uma ferramenta específica.**

## Por onde começar
| Você é… | Leia |
| --- | --- |
| Uma LLM ou agente | [`AGENTS.md`](AGENTS.md) |
| Pessoa da equipe usando IA no dia a dia | [`docs/COMO_USAR.md`](docs/COMO_USAR.md) |
| Pessoa da equipe que vai editar a base | [`CONTRIBUTING.md`](CONTRIBUTING.md) |

## Estrutura
```
AGENTS.md                  ponto de entrada para qualquer LLM (curto)
INSTRUCOES_PROJETO_FIO_PRIME.md   texto para o campo "instruções" de projetos/assistentes
FIO_PRIME_MEMORIA.md       índice da base + resumo de partida + changelog
GOVERNANCA.md              status de confiança, hierarquia de fontes, glossário, autoverificação
empresa/  canais/  catalogo/  operacao/  fiscal/  historico/   conhecimento por tema
agentes/                   papéis (estrategista, criativos, Ana, operações, fiscal, curador)
skills/                    procedimentos no formato aberto Agent Skills (SKILL.md)
comandos/                  atalhos /comando que funcionam em qualquer chat
docs/                      guias de uso
dados/                     descrição de exports (os dados em si ficam fora do git)
CLAUDE.md, GEMINI.md       ponteiros para AGENTS.md, sem conteúdo próprio
```

## Exemplos rápidos
- `/responder-cliente Shopee: "Essa meia aparece no scarpin?"`
- `/diagnostico-ads últimos 30 dias` + exportação do Shopee Ads
- `/descricao-anuncio kit 3 pares sapatilha super invisível Hoahi 33-38, Shopee`
- `/registrar o estoque do kit soquete estampada Rafa Parize hoje é 62 kits (fonte: Bling, 03/11/2026)`

## Regras de ouro
Não confundir dados ausentes com desempenho ruim, ROAS alto com lucro, proposta com decisão ou informação fiscal relatada com conclusão jurídica. Nunca versionar credenciais, e-CNPJ, XMLs de NF-e ou dados de clientes.
