"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"
import type { Projeto } from "@/types/projeto"

export function ProjetoClient({ projeto }: { projeto: Projeto }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
          <Image
            src={projeto.imagemCapa}
            alt={projeto.titulo}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
            >
              <Link
                href="/#portfolio"
                className="label text-text-muted hover:text-gold transition-colors duration-300 mb-4 inline-block"
              >
                ← Voltar ao portfólio
              </Link>
              <p className="label text-gold mb-3">{projeto.categoria}</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-primary">
                {projeto.titulo}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              >
                <p className="text-text-primary font-light tracking-wide leading-relaxed text-lg">
                  {projeto.descricao}
                </p>
              </motion.div>

              <motion.div
                className="space-y-6 border-l border-white/5 pl-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
              >
                <div>
                  <p className="label text-gold mb-1">Área</p>
                  <p className="font-serif text-xl text-text-primary">{projeto.area}</p>
                </div>
                <div>
                  <p className="label text-gold mb-1">Localização</p>
                  <p className="font-serif text-xl text-text-primary">{projeto.local}</p>
                </div>
                <div>
                  <p className="label text-gold mb-1">Ano</p>
                  <p className="font-serif text-xl text-text-primary">{projeto.ano}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {projeto.galeria.length > 0 && (
          <section className="px-6 pb-16 sm:pb-24">
            <div className="mx-auto max-w-[1280px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projeto.galeria.map((img, i) => (
                  <motion.div
                    key={img + i}
                    className={`relative overflow-hidden ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-[4/3]"}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" as const }}
                  >
                    <Image
                      src={img}
                      alt={`${projeto.titulo} – imagem ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {projeto.antesDepois && (
          <section className="px-6 pb-16 sm:pb-24">
            <div className="mx-auto max-w-4xl">
              <p className="label text-gold text-center mb-6">Antes & Depois</p>
              <BeforeAfterSlider
                antes={projeto.antesDepois.antes}
                depois={projeto.antesDepois.depois}
              />
            </div>
          </section>
        )}

        <section className="py-16 sm:py-24 px-6 bg-bg-secondary text-center">
          <p className="font-serif text-2xl sm:text-3xl text-text-primary mb-8">
            Quer um projeto assim?
          </p>
          <a
            href="/#contato"
            className="inline-block px-10 py-3.5 border border-gold text-gold label hover:bg-gold hover:text-bg-primary transition-all duration-300"
          >
            Agende uma conversa
          </a>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
