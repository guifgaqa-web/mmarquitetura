"use client"

import { SectionReveal } from "@/components/SectionReveal"

const servicos = [
  {
    titulo: "Projetos arquitetônicos",
    descricao: "Concepção completa de edificações residenciais e comerciais com identidade única.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titulo: "Design de interiores",
    descricao: "Ambientação sofisticada que equilibra estética, conforto e funcionalidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M20 9V7a2 2 0 00-2-2h-3M4 9V7a2 2 0 012-2h3M4 9h16M4 9v9a2 2 0 002 2h12a2 2 0 002-2V9M8 13h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titulo: "Estudos 3D e renderizações",
    descricao: "Visualizações fotorrealistas que antecipam cada detalhe do projeto final.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zM12 12l9-5M12 12v10M12 12L3 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titulo: "Acompanhamento de obra",
    descricao: "Supervisão técnica para garantir fidelidade ao projeto e qualidade na execução.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titulo: "Soluções personalizadas",
    descricao: "Consultoria sob medida para projetos com demandas especiais e alta complexidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Servicos() {
  return (
    <section
      id="servicos"
      className="py-24 md:py-32 lg:py-40 px-6 bg-bg-secondary"
      aria-label="Serviços"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="label text-gold text-center mb-4">Serviços</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary text-center mb-16">
            Do conceito à realização
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {servicos.map((servico, i) => (
            <SectionReveal key={servico.titulo} delay={i * 0.1}>
              <div className="group p-8 bg-bg-primary/50 border border-white/10 hover:border-gold/30 transition-all duration-500">
                <div className="text-gold mb-6">{servico.icon}</div>
                <h3 className="font-serif text-xl text-text-primary mb-3">
                  {servico.titulo}
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed tracking-wide">
                  {servico.descricao}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
