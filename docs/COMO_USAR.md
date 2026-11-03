# Como usar a base com qualquer LLM

A **fonte única** é este repositório. Cada ferramenta só precisa "enxergar" os arquivos. Há três jeitos, do melhor para o pior.

## 1. Ferramentas que abrem a pasta ou o repositório (agentes)
Exemplos: Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot e outros agentes de terminal ou editor.

- Abra a pasta do repositório. A maioria lê `AGENTS.md` automaticamente. `CLAUDE.md` e `GEMINI.md` existem só para ferramentas que procuram esses nomes, e apontam para `AGENTS.md`.
- Comandos, agentes e skills funcionam pela convenção descrita em `AGENTS.md`: `/comando`, "atue como X" e skills em `skills/`.
- Se uma ferramenta só descobre skills numa pasta própria (ex.: `.agents/skills`), configure-a para apontar para `skills/` ou crie um link local **fora do git**. Não duplique conteúdo.
- Esses agentes podem editar arquivos e fazer commit: siga `CONTRIBUTING.md`.

## 2. Chats no navegador ou app, ligados ao GitHub (recomendado para o dia a dia)
Exemplos: projetos no Claude.ai, projetos no ChatGPT, Gems ou chats do Gemini. Pré-requisito: o repositório estar no GitHub (pode ser privado).

1. Crie um projeto ou assistente "Fio Prime" na ferramenta.
2. Cole o conteúdo de `INSTRUCOES_PROJETO_FIO_PRIME.md` no campo de instruções.
3. Adicione o repositório pela integração com o GitHub, selecionando a raiz (ou, no mínimo: `AGENTS.md`, `FIO_PRIME_MEMORIA.md`, `GOVERNANCA.md` e as pastas de tema, `agentes/`, `skills/` e `comandos/`).
4. **Sincronize depois de cada mudança relevante no repositório.** No Claude.ai, por exemplo, a sincronização é manual (botão de sincronizar no conhecimento do projeto) e traz o conteúdo do branch escolhido. Confira na ferramenta que você usa como ela atualiza.
5. Use normalmente: `/responder-cliente ...`, "atue como estrategista-comercial", etc.

Limite importante: **o chat lê, mas não grava no repositório.** Para registrar algo descoberto no chat, use `/registrar ...`. A LLM entrega o trecho e o arquivo de destino, e alguém (ou um agente do item 1) faz o commit.

## 3. Upload manual de arquivos (último recurso)
Funciona em qualquer ferramenta, mas a cópia **fica desatualizada** a cada mudança e precisa ser reenviada. Se usar, envie pelo menos `AGENTS.md`, `FIO_PRIME_MEMORIA.md`, `GOVERNANCA.md` e os arquivos do tema da tarefa, e anote a data do upload.

## Boas práticas para a equipe
- Comece a conversa dizendo a tarefa. A LLM decide quais arquivos abrir.
- Anexe dados atuais (exports, prints). A base é histórica, não um espelho em tempo real.
- Desconfie de qualquer resposta que trate proposta como decisão ou ROAS como lucro, e peça `/revisar`.
- Nunca cole senhas, e-CNPJ, XMLs ou dados de clientes em chats sem necessidade.
