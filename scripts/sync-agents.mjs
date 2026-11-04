#!/usr/bin/env node
// Gera as cópias locais dos subagentes a partir de `.agents/agents/` (fonte única).
// As pastas de destino são ignoradas pelo git. Rode de novo após alterar um agente.
// Uso: node scripts/sync-agents.mjs
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, ".agents", "agents");
if (!existsSync(src)) {
  console.error(`Pasta de origem não encontrada: ${src}`);
  process.exit(1);
}

function parse(file) {
  const text = readFileSync(join(src, file), "utf8").replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) throw new Error(`${file}: frontmatter ausente`);
  const meta = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const i = line.indexOf(":");
      return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
    }),
  );
  if (!meta.name || !meta.description) throw new Error(`${file}: name e description são obrigatórios`);
  if (`${meta.name}.md` !== file) throw new Error(`${file}: name diferente do nome do arquivo`);
  return { name: meta.name, description: meta.description, readonly: meta.readonly === "true", body: match[2] };
}

const q = (value) => JSON.stringify(value);
const markdown = (fields, body) =>
  `---\n${Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n")}\n---\n\n${body}`;
const tomlBody = (body) => body.replace(/\\/g, "\\\\").replace(/"""/g, '\\"\\"\\"');

const targets = [
  {
    dir: [".claude", "agents"],
    file: (a) => `${a.name}.md`,
    render: (a) =>
      markdown(
        {
          name: a.name,
          description: q(a.description),
          ...(a.readonly ? { tools: "Read, Glob, Grep, WebSearch, WebFetch" } : {}),
        },
        a.body,
      ),
  },
  {
    dir: [".codex", "agents"],
    file: (a) => `${a.name}.toml`,
    render: (a) =>
      [
        `name = ${q(a.name)}`,
        `description = ${q(a.description)}`,
        ...(a.readonly ? ['sandbox_mode = "read-only"'] : []),
        `developer_instructions = """\n${tomlBody(a.body)}"""`,
        "",
      ].join("\n"),
  },
  {
    dir: [".gemini", "agents"],
    file: (a) => `${a.name}.md`,
    render: (a) => markdown({ name: a.name, description: q(a.description), kind: "local" }, a.body),
  },
  {
    dir: [".github", "agents"],
    file: (a) => `${a.name}.agent.md`,
    render: (a) => markdown({ name: a.name, description: q(a.description) }, a.body),
  },
];

const agents = readdirSync(src).filter((f) => f.endsWith(".md") && f !== "README.md").map(parse);
for (const target of targets) {
  const dest = join(root, ...target.dir);
  mkdirSync(dest, { recursive: true });
  for (const agent of agents) writeFileSync(join(dest, target.file(agent)), target.render(agent));
  console.log(`${agents.length} agentes em ${target.dir.join("/")}`);
}
