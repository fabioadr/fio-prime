---
name: registro-conhecimento
description: Atualiza a base de conhecimento da Fio Prime neste repositório — registra fatos novos, decisões, experimentos e resultados com data, status e fonte, sem apagar histórico. Use quando o usuário disser "registre", "anote", "atualize a memória/base", trouxer dado novo que contradiz a base ou aprovar uma decisão.
metadata:
  versao: "1.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Registro de conhecimento

> Caminhos são relativos à raiz do repositório.

## Leia antes
- `docs/governanca/status-e-fontes.md` (legenda e hierarquia) e `docs/governanca/atualizacao.md` (regra de atualização).
- O arquivo temático de destino (veja o índice em `docs/README.md`).

## Onde registrar
| Tipo | Destino |
| --- | --- |
| Fato sobre produto, canal, operação, fiscal | Arquivo temático correspondente |
| Evento datado (o que aconteceu, quando) | `docs/historico/cronologia.md` |
| Decisão aprovada ou experimento | `docs/historico/decisoes.md` (modelos em `docs/historico/decisoes-modelos.md`) |
| Dado que falta e foi descoberto | `docs/historico/lacunas-de-dados.md` |
| Nova regra de comportamento das LLMs | `AGENTS.md` (curto) |

## Passos
1. Classifique: CONFIRMADO NO PROJETO / RELATO DATADO / PEDIDO-PLANO / A VALIDAR / CRITÉRIO RECOMENDADO.
2. Escreva com **data do fato**, data de inclusão, quem informou e a fonte (conversa, arquivo, relatório).
3. Se substituir algo, mantenha o valor anterior como histórico ("antes: X, até dd/mm/aaaa").
4. Atualize `atualizado_em` no cabeçalho do arquivo e registre a mudança em `CHANGELOG.md` quando for relevante.
5. Mostre o diff ou o trecho alterado para o usuário aprovar.
6. Se o ambiente tiver git: commit pequeno, `tipo: assunto` em português (ver `CONTRIBUTING.md`). Se não tiver (chat no navegador): entregue o trecho pronto e indique o arquivo e o local exatos para alguém commitar.

## Não faça
- Registrar proposta como decisão sem aprovação explícita.
- Apagar histórico ou reescrever valores passados.
- Incluir dados sensíveis (credenciais, XMLs, dados de clientes).

## Quando devolver para uma pessoa
Mudança de regra de comportamento, remoção de conteúdo, conflito entre informações de pessoas diferentes e registro de decisão: peça aprovação ao responsável.
