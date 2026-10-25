import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Apresentação">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Projeto arquitetônico de alto padrão em Brasília"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAEAAYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFBABAAAAAAAAAAAAAAAAAAAABv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKYAH//Z"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg-primary" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="label text-gold mb-6 animate-[heroFadeUp_0.6s_0.3s_both]">
          Meireles / Marques
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight max-w-4xl animate-[heroFadeUp_0.8s_0.5s_both]">
          <span className="font-script text-gold">Arquitetura</span> que{" "}
          <strong className="text-gold">transforma</strong>.
          <br />
          Espaços que <strong className="text-gold">inspiram</strong>.
        </h1>

        <a
          href="#contato"
          className="mt-10 px-8 py-3.5 border border-gold text-gold label hover:bg-gold hover:text-bg-primary transition-all duration-300 animate-[heroFadeUp_0.6s_0.8s_both]"
        >
          Agende uma conversa
        </a>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-[heroFadeIn_1s_1.5s_both]">
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  )
}
