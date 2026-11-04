#!/usr/bin/env node
// Gera as cópias locais de agentes e skills para cada ferramenta de IA.
// Fontes únicas: `.agents/agents/` e `.agents/skills/`. Os destinos são ignorados pelo git.
// Uso: node scripts/sync-ia.mjs            atualiza as cópias
//      node scripts/sync-ia.mjs --check    só confere; sai com erro se houver diferença
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const agentsDir = join(root, ".agents", "agents");
const skillsDir = join(root, ".agents", "skills");

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function splitFrontmatter(file) {
  const text = readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) throw new Error(`${relative(root, file)}: frontmatter ausente`);
  const meta = {};
  for (const line of match[1].split("\n")) {
    const found = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (found) meta[found[1]] = found[2].trim();
  }
  return { meta, body: match[2] };
}

function readAgents() {
  return readdirSync(agentsDir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => {
      const { meta, body } = splitFrontmatter(join(agentsDir, f));
      if (!meta.name || !meta.description) throw new Error(`.agents/agents/${f}: name e description são obrigatórios`);
      if (`${meta.name}.md` !== f) throw new Error(`.agents/agents/${f}: name diferente do nome do arquivo`);
      return { name: meta.name, description: meta.description, readonly: meta.readonly === "true", body };
    });
}

const q = (value) => JSON.stringify(value);
const markdown = (fields, body) =>
  `---\n${Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n")}\n---\n\n${body}`;
const tomlBody = (body) => body.replace(/\\/g, "\\\\").replace(/"""/g, '\\"\\"\\"');

function agentOutputs() {
  const out = new Map();
  for (const a of readAgents()) {
    const claude = { name: a.name, description: q(a.description) };
    if (a.readonly) claude.tools = "Read, Glob, Grep, WebSearch, WebFetch";
    out.set(join(".claude", "agents", `${a.name}.md`), markdown(claude, a.body));
    out.set(
      join(".codex", "agents", `${a.name}.toml`),
      [
        `name = ${q(a.name)}`,
        `description = ${q(a.description)}`,
        ...(a.readonly ? ['sandbox_mode = "read-only"'] : []),
        `developer_instructions = """\n${tomlBody(a.body)}"""`,
        "",
      ].join("\n"),
    );
    out.set(
      join(".gemini", "agents", `${a.name}.md`),
      markdown({ name: a.name, description: q(a.description), kind: "local" }, a.body),
    );
    out.set(
      join(".github", "agents", `${a.name}.agent.md`),
      markdown({ name: a.name, description: q(a.description) }, a.body),
    );
  }
  return out;
}

function skillOutputs() {
  const out = new Map();
  for (const name of readdirSync(skillsDir)) {
    const folder = join(skillsDir, name);
    if (!statSync(folder).isDirectory()) continue;
    const { meta } = splitFrontmatter(join(folder, "SKILL.md"));
    if (meta.name !== name) throw new Error(`.agents/skills/${name}/SKILL.md: name diferente da pasta`);
    if (!meta.description) throw new Error(`.agents/skills/${name}/SKILL.md: description é obrigatória`);
    for (const file of walk(folder)) out.set(join(".claude", "skills", relative(skillsDir, file)), readFileSync(file));
  }
  return out;
}

const managed = [
  join(".claude", "agents"),
  join(".codex", "agents"),
  join(".gemini", "agents"),
  join(".github", "agents"),
  join(".claude", "skills"),
];

let wanted;
try {
  wanted = new Map([...agentOutputs(), ...skillOutputs()]);
} catch (error) {
  console.error(`sync-ia: ${error.message}`);
  process.exit(2);
}

if (process.argv.includes("--check")) {
  const existing = managed.flatMap((dir) => walk(join(root, dir)).map((f) => relative(root, f)));
  const problems = [];
  for (const [path, content] of wanted) {
    const full = join(root, path);
    if (!existsSync(full)) problems.push(`falta: ${path}`);
    else if (!readFileSync(full).equals(Buffer.from(content))) problems.push(`desatualizado: ${path}`);
  }
  for (const path of existing) if (!wanted.has(path)) problems.push(`sobrando: ${path}`);
  if (problems.length) {
    console.error(`sync-ia: ${problems.length} diferença(s). Rode: node scripts/sync-ia.mjs`);
    for (const p of problems.slice(0, 10)) console.error(`  ${p.split(sep).join("/")}`);
    process.exit(1);
  }
  console.log("sync-ia: cópias em dia");
  process.exit(0);
}

for (const dir of managed) rmSync(join(root, dir), { recursive: true, force: true });
for (const [path, content] of wanted) {
  const full = join(root, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}
console.log(`sync-ia: ${wanted.size} arquivos gerados`);
