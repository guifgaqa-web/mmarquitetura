import { getProjetos } from "@/lib/projetos"
import { HomeClient } from "./HomeClient"

export default function Home() {
  const projetos = getProjetos()
  return <HomeClient projetos={projetos} />
}
