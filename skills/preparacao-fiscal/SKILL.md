---
name: preparacao-fiscal
description: Organiza documentos, fatos e perguntas fiscais, societárias e de importação da Fio Prime para levar ao contador — Simples Nacional, ICMS/recomposição, CNAE, JUCEMG, NF-e de entrada, importação. Use quando o assunto envolver tributo, regime, nota fiscal, CNAE, endereço da empresa ou importação. Não emite parecer.
metadata:
  versao: "1.0.0"
  atualizado_em: "2026-11-03"
  dono: "Fábio"
---

# Preparação fiscal e de importação (dossiê para o contador)

> Caminhos são relativos à raiz do repositório. **Não é parecer contábil ou jurídico.**

## Leia antes
- `fiscal/enquadramento-e-importacao.md` — relatos, CNAEs, objetivos e as questões obrigatórias (§9.4).
- `empresa/identidade.md`.

## Entradas
XMLs ou DANFEs, regime atual, faturamento acumulado e projetado, mix de produtos, fornecedores e UF de origem, formato de importação pretendido.

## Passos
1. Separe **fato documentado** (com documento e data), **relato** (ex.: "recomposição de uns 17%") e **hipótese**.
2. Extraia dos documentos os campos relevantes (CFOP, CST/CSOSN, NCM, origem, base, ICMS), **sem expor chaves ou dados pessoais** em arquivos versionados.
3. Monte cenários condicionais (ex.: Simples x regime normal) com todas as premissas explícitas e marcadas para validação.
4. Liste as perguntas objetivas para o contador e os documentos faltantes.
5. Se pesquisar legislação (só com autorização), cite a fonte e a data de consulta.

## Saída
Dossiê: fatos com fonte | relatos | hipóteses | cenários | perguntas ao contador | documentos faltantes | riscos.

## Não faça
- Determinar NCM, CFOP, CSOSN, origem fiscal, crédito de ICMS ou "vale sair do Simples".
- Tratar um percentual relatado como alíquota universal.
- Versionar XMLs, chaves de acesso, e-CNPJ ou dados de clientes.
