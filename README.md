# Fio Prime — base de conhecimento para LLMs

Repositório compartilhado da equipe da Fio Prime. Reúne o que qualquer LLM (Claude, ChatGPT, Gemini, Copilot ou outra) precisa saber para trabalhar na empresa, e o que cada pessoa precisa para trabalhar junto. Segue os padrões abertos de mercado; **nada depende de uma ferramenta específica**.

## Por onde começar
| Você é… | Leia |
| --- | --- |
| Uma LLM ou agente | [`AGENTS.md`](AGENTS.md) |
| Pessoa da equipe usando IA no dia a dia | [`docs/ia/como-usar.md`](docs/ia/como-usar.md) |
| Pessoa da equipe que vai editar a base | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| Procurando um assunto | [`docs/README.md`](docs/README.md) |

## Estrutura
```
AGENTS.md          instruções para qualquer agente (padrão aberto AGENTS.md)
.agents/skills/    procedimentos reutilizáveis (padrão aberto Agent Skills: <nome>/SKILL.md)
docs/              conhecimento da Fio Prime, em arquivos pequenos por tema (índice: docs/README.md)
dados/             descrição de exports (os dados em si ficam fora do git)
scripts/           utilitários (ex.: adaptador de skills para o Claude Code)
CHANGELOG.md       histórico de mudanças da base
CONTRIBUTING.md    como a equipe colabora
```

## Exemplos rápidos
- `/atendimento-cliente Shopee: "Essa meia aparece no scarpin?"`
- `/analise-shopee-ads últimos 30 dias` + exportação do Shopee Ads
- `/redacao-anuncio kit 3 pares sapatilha super invisível Hoahi 33-38, Shopee`
- `/registro-conhecimento estoque do kit soquete estampada Rafa Parize: 62 kits (Bling, 03/11/2026)`

Em ferramentas que não usam `/`, escreva "use a skill atendimento-cliente: …".

## Regras de ouro
Não confundir dados ausentes com desempenho ruim, ROAS alto com lucro, proposta com decisão ou informação fiscal relatada com conclusão jurídica. Nunca versionar credenciais, e-CNPJ, XMLs de NF-e ou dados de clientes.
