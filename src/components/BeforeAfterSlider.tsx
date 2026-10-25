"use client"

import { useState, useRef, useCallback, type MouseEvent, type TouchEvent } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  antes: string
  depois: string
  altAntes?: string
  altDepois?: string
}

export function BeforeAfterSlider({
  antes,
  depois,
  altAntes = "Antes – renderização 3D",
  altDepois = "Depois – obra finalizada",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, x)))
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseUp = () => { dragging.current = false }
  const onMouseMove = (e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onTouchMove = (e: TouchEvent) => { updatePosition(e.touches[0].clientX) }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video overflow-hidden cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      role="slider"
      aria-label="Comparação antes e depois"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2))
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2))
      }}
    >
      <Image src={depois} alt={altDepois} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image src={antes} alt={altAntes} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gold bg-bg-primary/80 flex items-center justify-center">
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>

      <span className="absolute top-4 left-4 label text-xs text-text-primary bg-bg-primary/60 px-3 py-1">
        Render
      </span>
      <span className="absolute top-4 right-4 label text-xs text-text-primary bg-bg-primary/60 px-3 py-1">
        Obra
      </span>
    </div>
  )
}
