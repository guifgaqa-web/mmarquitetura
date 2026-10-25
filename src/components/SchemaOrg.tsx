export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ArchitecturalService",
        "@id": "https://mmarquitetura.com.br/#service",
        name: "MM Arquitetura – Meireles / Marques Arquitetura e Interiores",
        description:
          "Escritório de arquitetura em Brasília especializado em projetos residenciais, comerciais e interiores de alto padrão.",
        url: "https://mmarquitetura.com.br",
        telephone: "+55-61-98324-4053",
        areaServed: {
          "@type": "City",
          name: "Brasília",
          addressRegion: "DF",
          addressCountry: "BR",
        },
        serviceType: [
          "Projetos arquitetônicos",
          "Design de interiores",
          "Estudos 3D e renderizações",
          "Acompanhamento de obra",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mmarquitetura.com.br/#business",
        name: "MM Arquitetura",
        description:
          "Arquiteto em Brasília – Projetos residenciais e interiores de alto padrão",
        url: "https://mmarquitetura.com.br",
        telephone: "+55-61-98324-4053",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brasília",
          addressRegion: "DF",
          addressCountry: "BR",
        },
        sameAs: ["https://www.instagram.com/mm.arquiteturabsb"],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
