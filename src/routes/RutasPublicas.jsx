import { Navigate, Outlet } from "react-router-dom"

export const RutasPublicas = () => {
  const isAutenticado = false

  return isAutenticado ? <Navigate to={"/"} /> : <Outlet />
}
