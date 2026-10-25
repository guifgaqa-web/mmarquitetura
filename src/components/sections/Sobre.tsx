"use client"

import Image from "next/image"
import { SectionReveal } from "@/components/SectionReveal"

export function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 md:py-32 lg:py-40 px-6"
      aria-label="Sobre"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="label text-gold text-center mb-4">Sobre</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary text-center mb-16">
            Quem somos
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionReveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src="/images/equipe/arquiteto-1.jpg"
                alt="TODO: Foto dos arquitetos do escritório MM Arquitetura"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="label text-gold text-xs">TODO: Foto real da equipe</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div>
              <p className="font-serif text-2xl sm:text-3xl text-text-primary leading-relaxed mb-6">
                {/* TODO: Texto real sobre o escritório */}
                Com mais de uma década de experiência, o escritório Meireles /
                Marques une sensibilidade estética e rigor técnico para
                transformar espaços em experiências.
              </p>
              <p className="text-text-muted font-light tracking-wide leading-relaxed mb-8">
                {/* TODO: Texto real sobre a história e filosofia */}
                Sediados em Brasília, atuamos em projetos residenciais,
                comerciais e de interiores com foco em soluções personalizadas
                que respeitam a identidade de cada cliente e a essência de cada
                lugar.
              </p>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <div>
                  <p className="label text-gold mb-1">
                    {/* TODO: Nome real */}
                    Arq. TODO: Nome Meireles
                  </p>
                  <p className="text-sm text-text-muted font-light">
                    {/* TODO: CAU real */}
                    CAU TODO: A000000-0
                  </p>
                </div>
                <div>
                  <p className="label text-gold mb-1">
                    {/* TODO: Nome real */}
                    Arq. TODO: Nome Marques
                  </p>
                  <p className="text-sm text-text-muted font-light">
                    {/* TODO: CAU real */}
                    CAU TODO: A000000-0
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
