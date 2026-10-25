"use client"

import { SectionReveal } from "@/components/SectionReveal"

const etapas = [
  { numero: "01", titulo: "Briefing", descricao: "Entendemos suas necessidades, expectativas e estilo de vida." },
  { numero: "02", titulo: "Estudo preliminar", descricao: "Criamos as primeiras soluções espaciais e volumétricas." },
  { numero: "03", titulo: "Visualização 3D", descricao: "Apresentamos renders fotorrealistas do projeto." },
  { numero: "04", titulo: "Projeto executivo", descricao: "Detalhamento técnico completo para a construção." },
  { numero: "05", titulo: "Obra", descricao: "Acompanhamento em cada etapa até a entrega final." },
]

export function Processo() {
  return (
    <section
      id="processo"
      className="py-24 md:py-32 lg:py-40 px-6 bg-bg-secondary"
      aria-label="Processo"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="label text-gold text-center mb-4">Processo</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary text-center mb-6">
            Do conceito à realização
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-16 font-light tracking-wide">
            Cuidamos de cada detalhe em todas as fases do seu projeto.
          </p>
        </SectionReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {etapas.map((etapa, i) => (
              <SectionReveal key={etapa.numero} delay={i * 0.15}>
                <div className="relative text-center lg:text-center">
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/40 bg-bg-primary">
                    <span className="font-serif text-lg text-gold">
                      {etapa.numero}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-text-primary mb-2">
                    {etapa.titulo}
                  </h3>
                  <p className="text-sm text-text-muted font-light tracking-wide leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
