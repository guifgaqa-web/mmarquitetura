"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState } from "react"

interface MobileMenuProps {
  links: { label: string; href: string }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              aria-label="Abrir menu"
              className="flex flex-col gap-1.5 p-2"
            />
          }
        >
          <span className="block w-6 h-px bg-text-primary" />
          <span className="block w-6 h-px bg-text-primary" />
          <span className="block w-4 h-px bg-gold" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-bg-primary border-white/5 w-full sm:max-w-sm"
          showCloseButton
        >
          <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
          <nav
            className="flex flex-col gap-6 mt-16 px-8"
            aria-label="Navegação mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-text-primary hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 px-6 py-3 border border-gold text-gold label text-center hover:bg-gold hover:text-bg-primary transition-all duration-300"
            >
              Agende uma conversa
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
