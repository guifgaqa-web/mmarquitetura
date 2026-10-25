export interface Projeto {
  slug: string
  titulo: string
  categoria: "Residencial" | "Interiores" | "Comercial" | "Alto padrão"
  descricao: string
  area: string
  local: string
  ano: string
  imagemCapa: string
  galeria: string[]
  antesDepois?: {
    antes: string
    depois: string
  }
}
