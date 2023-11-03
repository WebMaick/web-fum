import { Navigate, Outlet } from "react-router-dom"

export const RutasAuth = () => {
  const isAutenticado = false

  return isAutenticado ? <Navigate to={"/"} /> : <Outlet />
}
