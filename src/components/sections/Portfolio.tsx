"use client"

import { useState } from "react"
import { SectionReveal } from "@/components/SectionReveal"
import { ProjectCard } from "@/components/ProjectCard"
import type { Projeto } from "@/types/projeto"

const categorias = ["Todos", "Residencial", "Interiores", "Comercial", "Alto padrão"] as const

export function Portfolio({ projetos }: { projetos: Projeto[] }) {
  const [filtro, setFiltro] = useState<string>("Todos")

  const filtrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro)

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 lg:py-40 px-6"
      aria-label="Portfólio"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="label text-gold text-center mb-4">Portfólio</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary text-center mb-12">
            Projetos selecionados
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            role="tablist"
            aria-label="Filtrar projetos por categoria"
          >
            {categorias.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filtro === cat}
                onClick={() => setFiltro(cat)}
                className={`label px-4 py-2 transition-all duration-300 ${
                  filtro === cat
                    ? "text-gold border-b border-gold"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((projeto) => (
            <ProjectCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}
