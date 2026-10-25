"use client"

import { SectionReveal } from "@/components/SectionReveal"

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="py-24 md:py-32 lg:py-40 px-6"
      aria-label="Manifesto"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionReveal>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="label text-gold mb-8">Nosso propósito</p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-primary leading-relaxed">
            Projetamos com propósito para criar ambientes{" "}
            <em className="text-gold not-italic">exclusivos</em>, funcionais e
            atemporais, que refletem a{" "}
            <em className="text-gold not-italic">essência</em> de cada cliente.
          </blockquote>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="w-12 h-px bg-gold mx-auto mt-8" />
        </SectionReveal>
      </div>
    </section>
  )
}
