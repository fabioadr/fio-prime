#!/bin/sh
# Atualiza as cópias de agentes e skills. Sem Node, avisa e não bloqueia.
if command -v node >/dev/null 2>&1; then
  node scripts/sync-ia.mjs
else
  echo "fio-prime: Node não encontrado; rode scripts/sync-ia.mjs em uma máquina com Node." >&2
fi
