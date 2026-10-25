import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProjetoBySlug, getProjetoSlugs } from "@/lib/projetos"
import { ProjetoClient } from "./ProjetoClient"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getProjetoSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const projeto = getProjetoBySlug(slug)
  if (!projeto) return {}

  return {
    title: `${projeto.titulo} | MM Arquitetura`,
    description: `${projeto.descricao} – Projeto de ${projeto.categoria.toLowerCase()} em ${projeto.local} por MM Arquitetura.`,
    openGraph: {
      title: `${projeto.titulo} | MM Arquitetura`,
      description: projeto.descricao,
      images: [{ url: projeto.imagemCapa }],
    },
  }
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params
  const projeto = getProjetoBySlug(slug)
  if (!projeto) notFound()

  return <ProjetoClient projeto={projeto} />
}
