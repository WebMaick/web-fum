import { Navigate, Outlet } from "react-router-dom"

export const RutasPrivadas = () => {
  const isAutenticado = false

  return isAutenticado ? (
    <>
      <h2>Menu</h2>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} />
  )
}
