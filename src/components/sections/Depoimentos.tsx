"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionReveal } from "@/components/SectionReveal"

const depoimentos = [
  {
    texto: "TODO: Inserir depoimento real do cliente.",
    autor: "TODO: Nome do cliente",
    projeto: "TODO: Nome do projeto",
  },
  {
    texto: "TODO: Inserir depoimento real do cliente.",
    autor: "TODO: Nome do cliente",
    projeto: "TODO: Nome do projeto",
  },
  {
    texto: "TODO: Inserir depoimento real do cliente.",
    autor: "TODO: Nome do cliente",
    projeto: "TODO: Nome do projeto",
  },
]

export function Depoimentos() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % depoimentos.length)
  const prev = () => setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length)

  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32 lg:py-40 px-6 bg-bg-secondary"
      aria-label="Depoimentos"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionReveal>
          <p className="label text-gold mb-4">Depoimentos</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary mb-16">
            O que dizem nossos clientes
          </h2>
        </SectionReveal>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
            >
              <svg
                className="w-8 h-8 text-gold/30 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <blockquote className="font-serif text-xl sm:text-2xl text-text-primary leading-relaxed mb-6">
                &ldquo;{depoimentos[current].texto}&rdquo;
              </blockquote>
              <p className="label text-gold">
                {depoimentos[current].autor}
              </p>
              <p className="text-sm text-text-muted mt-1 font-light">
                {depoimentos[current].projeto}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className="p-3 -m-1"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-white/20 w-2"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
