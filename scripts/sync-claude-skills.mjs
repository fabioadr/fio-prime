#!/usr/bin/env node
// Adaptador opcional: o Claude Code ainda não lê o caminho padrão `.agents/skills/`,
// só `.claude/skills/`. Este script copia as skills para lá. A pasta `.claude/` é ignorada
// pelo git: a fonte única continua sendo `.agents/skills/`. Rode de novo após alterar skills.
// Uso: node scripts/sync-claude-skills.mjs
import { cpSync, rmSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, ".agents", "skills");
const dest = join(root, ".claude", "skills");

if (!existsSync(src)) {
  console.error(`Pasta de origem não encontrada: ${src}`);
  process.exit(1);
}
rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true, filter: (p) => !p.endsWith("README.md") });
console.log(`Skills copiadas de ${src} para ${dest}`);
