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
- `GOVERNANCA.md` — legenda de status, hierarquia de fontes e regra de atualização.
- O arquivo temático de destino (veja o mapa em `FIO_PRIME_MEMORIA.md`).

## Onde registrar
| Tipo | Destino |
| --- | --- |
| Fato sobre produto, canal, operação, fiscal | Arquivo temático correspondente |
| Evento datado (o que aconteceu, quando) | `historico/cronologia.md` |
| Decisão aprovada ou experimento | `historico/decisoes.md` (usar os modelos) |
| Dado que falta e foi descoberto | `historico/lacunas-de-dados.md` |
| Nova regra de comportamento das LLMs | `AGENTS.md` (curto) e `INSTRUCOES_PROJETO_FIO_PRIME.md` |

## Passos
1. Classifique: CONFIRMADO NO PROJETO / RELATO DATADO / PEDIDO-PLANO / A VALIDAR / CRITÉRIO RECOMENDADO.
2. Escreva com **data do fato**, data de inclusão, quem informou e a fonte (conversa, arquivo, relatório).
3. Se substituir algo, mantenha o valor anterior como histórico ("antes: X, até dd/mm/aaaa").
4. Atualize `atualizado_em` no cabeçalho do arquivo e a linha no changelog de `FIO_PRIME_MEMORIA.md`.
5. Mostre o diff ou o trecho alterado para o usuário aprovar.
6. Se o ambiente tiver git: commit pequeno, `tipo: assunto` em português (ver `CONTRIBUTING.md`). Se não tiver (chat no navegador): entregue o trecho pronto e indique o arquivo e o local exatos para alguém commitar.

## Não faça
- Registrar proposta como decisão sem aprovação explícita.
- Apagar histórico ou reescrever valores passados.
- Incluir dados sensíveis (credenciais, XMLs, dados de clientes).
