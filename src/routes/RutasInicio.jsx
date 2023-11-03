import { Routes, Route } from "react-router-dom"
import { Inicio } from "../pages/Inicio"
import { Contactos } from "../pages/Contactos"
import { Cursos } from "../pages/Cursos"
import { Nosotros } from "../pages/Nosotros"
import { RutasAuth } from "./RutasAuth"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { RutasPublicas } from "./RutasPublicas"
import { RutasPrivadas } from "./RutasPrivadas"
import { Certificados } from "../pages/Certificados"
import { Examenes } from "../pages/Examenes"
import { Multimedia } from "../pages/Multimedia"
import { Principal } from "../pages/Principal"

export const RutasInicio = () => {
  return (
    <>
      <Routes>
        <Route element={<RutasPublicas />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Route>

        <Route element={<RutasAuth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>

        <Route element={<RutasPrivadas />}>
          <Route path="/fum/certificados" element={<Certificados />} />
          <Route path="/fum/examenes" element={<Examenes />} />
          <Route path="/fum/multimedia" element={<Multimedia />} />
          <Route path="/fum/principal" element={<Principal />} />
        </Route>
      </Routes>
    </>
  )
}
