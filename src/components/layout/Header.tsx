"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "./MobileMenu"

const navLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-20">
        <Link href="/" aria-label="MM Arquitetura – Página inicial">
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label text-text-muted hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 px-6 py-2.5 border border-gold text-gold label hover:bg-gold hover:text-bg-primary transition-all duration-300"
          >
            Agende uma conversa
          </a>
        </nav>

        <MobileMenu links={navLinks} />
      </div>
    </header>
  )
}
