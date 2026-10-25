import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google"
import { SchemaOrg } from "@/components/SchemaOrg"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mmarquitetura.com.br"),
  title: {
    default: "MM Arquitetura | Arquiteto em Brasília – Projetos Residenciais e Interiores de Alto Padrão",
    template: "%s | MM Arquitetura",
  },
  description:
    "Meireles / Marques Arquitetura e Interiores – Escritório de arquitetura em Brasília especializado em projetos residenciais, comerciais e interiores de alto padrão. Transformamos espaços com propósito.",
  keywords: [
    "arquiteto em Brasília",
    "projeto residencial alto padrão Brasília",
    "design de interiores Brasília",
    "arquitetura de interiores",
    "projeto comercial Brasília",
    "escritório de arquitetura Brasília",
    "MM Arquitetura",
  ],
  authors: [{ name: "Meireles / Marques Arquitetura e Interiores" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MM Arquitetura",
    title: "MM Arquitetura | Arquiteto em Brasília",
    description:
      "Projetos residenciais, comerciais e interiores de alto padrão em Brasília. Arquitetura que transforma. Espaços que inspiram.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <SchemaOrg />
        {children}
      </body>
    </html>
  )
}
