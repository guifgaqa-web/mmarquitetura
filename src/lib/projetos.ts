import fs from "fs"
import path from "path"
import type { Projeto } from "@/types/projeto"

const projetosDir = path.join(process.cwd(), "content/projetos")

export function getProjetos(): Projeto[] {
  const files = fs.readdirSync(projetosDir).filter((f) => f.endsWith(".json"))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(projetosDir, file), "utf-8")
    return JSON.parse(raw) as Projeto
  })
}

export function getProjetoBySlug(slug: string): Projeto | undefined {
  const filePath = path.join(projetosDir, `${slug}.json`)
  if (!fs.existsSync(filePath)) return undefined
  const raw = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(raw) as Projeto
}

export function getProjetoSlugs(): string[] {
  return fs
    .readdirSync(projetosDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""))
}
