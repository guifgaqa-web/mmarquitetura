"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { Hero } from "@/components/sections/Hero"
import { Manifesto } from "@/components/sections/Manifesto"
import { Servicos } from "@/components/sections/Servicos"
import type { Projeto } from "@/types/projeto"

const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((m) => m.Portfolio))
const Processo = dynamic(() => import("@/components/sections/Processo").then((m) => m.Processo))
const Sobre = dynamic(() => import("@/components/sections/Sobre").then((m) => m.Sobre))
const Depoimentos = dynamic(() => import("@/components/sections/Depoimentos").then((m) => m.Depoimentos))
const Contato = dynamic(() => import("@/components/sections/Contato").then((m) => m.Contato))

export function HomeClient({ projetos }: { projetos: Projeto[] }) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Servicos />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Portfolio projetos={projetos} />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Processo />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Sobre />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Depoimentos />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
