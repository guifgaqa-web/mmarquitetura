"use client"

import { useState, type FormEvent } from "react"
import { SectionReveal } from "@/components/SectionReveal"

const WHATSAPP_NUMBER = "5561983244053"

export function Contato() {
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    metragem: "",
    bairro: "",
    prazo: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = [
      `Olá! Meu nome é ${form.nome}.`,
      form.tipo && `Tipo de projeto: ${form.tipo}.`,
      form.metragem && `Metragem estimada: ${form.metragem}.`,
      form.bairro && `Localização: ${form.bairro}.`,
      form.prazo && `Prazo desejado: ${form.prazo}.`,
      "Gostaria de agendar uma conversa.",
    ]
      .filter(Boolean)
      .join(" ")
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
  }

  return (
    <section
      id="contato"
      className="py-24 md:py-32 lg:py-40 px-6"
      aria-label="Contato"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="label text-gold text-center mb-4">Contato</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary text-center mb-6">
            Vamos conversar?
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-16 font-light tracking-wide">
            Conte-nos sobre o seu projeto. Responderemos em até 24 horas.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <SectionReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Formulário de contato"
            >
              <div>
                <label htmlFor="nome" className="label text-text-muted mb-2 block">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-white/5 border-b border-white/15 py-3 px-3 text-text-primary font-light tracking-wide focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-text-muted/50"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="label text-text-muted mb-2 block">
                  Tipo de projeto
                </label>
                <select
                  id="tipo"
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  className="w-full bg-white/5 border-b border-white/15 py-3 px-3 text-text-primary font-light tracking-wide focus:border-gold focus:outline-none transition-colors duration-300 [&>option]:bg-bg-primary placeholder:text-text-muted/50"
                >
                  <option value="">Selecione</option>
                  <option value="Residencial">Residencial</option>
                  <option value="Interiores">Design de interiores</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Reforma">Reforma</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="metragem" className="label text-text-muted mb-2 block">
                    Metragem estimada
                  </label>
                  <input
                    id="metragem"
                    type="text"
                    value={form.metragem}
                    onChange={(e) => setForm({ ...form, metragem: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/15 py-3 px-3 text-text-primary font-light tracking-wide focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-text-muted/50"
                    placeholder="Ex: 200m²"
                  />
                </div>
                <div>
                  <label htmlFor="bairro" className="label text-text-muted mb-2 block">
                    Bairro / Localização
                  </label>
                  <input
                    id="bairro"
                    type="text"
                    value={form.bairro}
                    onChange={(e) => setForm({ ...form, bairro: e.target.value })}
                    className="w-full bg-white/5 border-b border-white/15 py-3 px-3 text-text-primary font-light tracking-wide focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-text-muted/50"
                    placeholder="Ex: Lago Norte"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="prazo" className="label text-text-muted mb-2 block">
                  Prazo desejado
                </label>
                <input
                  id="prazo"
                  type="text"
                  value={form.prazo}
                  onChange={(e) => setForm({ ...form, prazo: e.target.value })}
                  className="w-full bg-white/5 border-b border-white/15 py-3 px-3 text-text-primary font-light tracking-wide focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-text-muted/50"
                  placeholder="Ex: 6 meses"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-gold text-bg-primary label hover:bg-gold-hover transition-colors duration-300 mt-4"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="space-y-8">
              <div>
                <p className="label text-gold mb-3">WhatsApp</p>
                <a
                  href="tel:+5561983244053"
                  className="font-serif text-2xl text-text-primary hover:text-gold transition-colors duration-300"
                >
                  (61) 98324-4053
                </a>
              </div>

              <div>
                <p className="label text-gold mb-3">Instagram</p>
                <a
                  href="https://www.instagram.com/mm.arquiteturabsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl text-text-primary hover:text-gold transition-colors duration-300"
                >
                  @mm.arquiteturabsb
                </a>
              </div>

              <div>
                <p className="label text-gold mb-3">Localização</p>
                <p className="font-serif text-xl text-text-primary">
                  Brasília – DF
                </p>
              </div>

              <div className="mt-8 aspect-video relative overflow-hidden border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245906.4507513902!2d-48.0468!3d-15.7939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2zQnJhc8OtbGlhIC0gREY!5e0!3m2!1spt-BR!2sbr!4v1"
                  className="absolute inset-0 w-full h-full grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório MM Arquitetura em Brasília"
                  allowFullScreen
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
