import type { MetadataRoute } from "next"
import { getProjetoSlugs } from "@/lib/projetos"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mmarquitetura.com.br"

  const projetos = getProjetoSlugs().map((slug) => ({
    url: `${base}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projetos,
  ]
}
