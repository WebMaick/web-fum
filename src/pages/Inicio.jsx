import { Navbar } from "../UI/Navbar"
import { Cursos } from "./Cursos"

export const Inicio = () => {
  return (
    <main className="bg-zinc-800">
      <header className="h-screen">
        <Navbar />
        <div className="relative top-[65px]">
          <h2>Hola Maick</h2>
        </div>
      </header>

      <section className="min-h-screen">
        <Cursos />
      </section>

      <footer className="min-h-screen">
        <h2>Footer</h2>
      </footer>
    </main>
  )
}
