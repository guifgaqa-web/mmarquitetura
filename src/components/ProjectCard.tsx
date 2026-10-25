"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Projeto } from "@/types/projeto"

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      <Link
        href={`/projetos/${projeto.slug}`}
        className="group block relative overflow-hidden aspect-[4/3] border border-white/5"
      >
        <Image
          src={projeto.imagemCapa}
          alt={projeto.titulo}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="label text-gold text-xs mb-2">{projeto.categoria}</p>
          <h3 className="font-serif text-xl text-text-primary">
            {projeto.titulo}
          </h3>
          <p className="text-xs text-text-muted mt-1">
            {projeto.local} · {projeto.ano}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
