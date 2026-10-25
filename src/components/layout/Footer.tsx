import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-serif text-xl text-text-primary">
              Meireles / Marques
            </p>
            <p className="label text-text-muted mt-2">
              Arquitetura e Interiores
            </p>
          </div>

          <p className="label text-text-muted text-center">
            Projetos residenciais · Interiores · Comerciais · Alto padrão
          </p>

          <div className="flex flex-col items-start md:items-end gap-2">
            <a
              href="https://www.instagram.com/mm.arquiteturabsb"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-text-muted hover:text-gold transition-colors duration-300"
            >
              @mm.arquiteturabsb
            </a>
            <a
              href="tel:+5561983244053"
              className="label text-text-muted hover:text-gold transition-colors duration-300"
            >
              (61) 98324-4053
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-text-muted font-light tracking-wide">
            © {new Date().getFullYear()} MM Arquitetura. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-text-muted font-light tracking-wide">
            Brasília – DF
          </p>
        </div>
      </div>
    </footer>
  )
}
